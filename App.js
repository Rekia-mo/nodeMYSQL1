import express from 'express';
const app = express();
import { getNotes, creatNote, getNote} from './database.js';

app.use(express.json());

app.get('/api/notes',async(req, res)=>{
  const notes = await getNotes();
  res.json(notes)
});

app.get('/api/notes/:id',async(req, res)=>{
  const id = req.params.id;
  const note = await getNote(id);
  res.json(note)
});


app.post('/api/notes', async (req, res) => {
  const { title, contents } = req.body;

  try {
    const note = await creatNote(title, contents);
    res.status(201).json(note); // 201 for created
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create note' });
  }
});

app.use((err, req, res, next)=>{
  console.error(err.stack)
  res.statu(500).send('something broke!');
});
app.listen(3000, ()=>console.log('listen to port 3000...'))

