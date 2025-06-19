const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const contactRoutes = require('./routes/contact.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/contact', contactRoutes);

// Teste se a API tá rodando
app.get('/', (req, res) => {
    res.send('API está rodando 🔥');
});

// Start
app.listen(PORT, () => {
    console.log(`Server rodando em http://localhost:${PORT}`);
});
