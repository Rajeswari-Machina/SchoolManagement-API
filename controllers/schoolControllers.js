const db = require('../config/db');
const calculateDistance = require('../utils/distance');

exports.addSchool = async(req, res) => {
  const { name, address, latitude, longitude } = req.body;
  try{
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  const result = await db.query(query, [name, address, latitude, longitude])
  res.status(201).json({ message: 'School added successfully', id: result.insertId });
  
  }catch(err){ 
  res.status(500).json({ message: 'Error adding school', error: err });}
};

exports.listSchools = async(req, res) => {
  const { latitude, longitude } = req.query;
  try{
  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and Longitude are required' });
  }

  const results = await db.query('SELECT * FROM schools');
  const userCoords = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };
  const sorted = results.map(school => {
  const distance = calculateDistance(userCoords, {
        latitude: school.latitude,
        longitude: school.longitude
      }) 
  return { ...school, distance };
    }).sort((a, b) => a.distance - b.distance);

    res.status(200).json(sorted);
  }catch(err){
    res.status(500).json({ message: 'Error fetching schools', error: err });
  }
};
