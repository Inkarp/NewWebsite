const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to JSON file
const dataPath = path.join(__dirname, '../data/principals.json');

// Always load fresh version (so you can edit the JSON while server is running)
function loadPrincipals() {
  const raw = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(raw);
}

// GET /api/principals/search?q=term
router.get('/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';

  const results = loadPrincipals().filter((principal) =>
    principal.vertical?.toLowerCase().includes(query) ||
    principal.principal.toLowerCase().includes(query) ||
    principal.products.some((p) => p.toLowerCase().includes(query))
  );

  res.json(results);
});

module.exports = router;
