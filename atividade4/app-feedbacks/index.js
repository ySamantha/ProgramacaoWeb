const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

let feedbacks = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

function escapeHTML(text) {
    if (typeof text !== 'string') return String(text);
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/feedbacks/enviar', (req, res) => {
    const { nome, comentario } = req.body;

    if (nome && comentario) {
        const novoFeedback = {
            id: Date.now(),
            nome: nome,
            comentario: comentario
        };
        feedbacks.push(novoFeedback);
    }
    res.redirect('/feedbacks/lista');
});

app.get('/feedbacks/lista', (req, res) => {
    fs.readFile(path.join(__dirname, 'views', 'template.html'), 'utf8', (err, templateHTML) => {
        if (err) {
            res.status(500).send("Erro ao carregar a página de feedbacks.");
            return;
        }

        let itemsHTML = '';
        if (feedbacks.length === 0) {
            itemsHTML = '<p class="no-feedbacks">Nenhum feedback enviado ainda.</p>';
        } else {
            feedbacks.forEach(fb => {
                itemsHTML += `
                    <div class="feedback-item">
                        <h3>${escapeHTML(fb.nome)}</h3>
                        <p>${escapeHTML(fb.comentario)}</p>
                        <div class="actions-container">
                            <form action="/feedbacks/remover" method="POST" style="display: inline;">
                                <input type="hidden" name="feedbackId" value="${fb.id}">
                                <button type="submit" class="remover-btn">Remover</button>
                            </form>
                        </div>
                    </div>
                `;
            });
        }
        const paginaFinalHTML = templateHTML.replace('', itemsHTML);
        res.send(paginaFinalHTML);
    });
});

app.post('/feedbacks/remover', (req, res) => {
    const idParaRemover = parseInt(req.body.feedbackId, 10);
    const feedbackIndex = feedbacks.findIndex(fb => fb.id === idParaRemover);

    if (feedbackIndex !== -1) {
        feedbacks.splice(feedbackIndex, 1);
    }
    res.redirect('/feedbacks/lista');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});