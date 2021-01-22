import * as Yup from 'yup';
import Films from '../models/Films';

class FilmsController {
async store(req, res){
    const schema = Yup.object().shape({
       title: Yup.string().required(),
       movie_director: Yup.string().required(),
      });
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: ' Validation fails' });
      }
    const { id, title, movie_director, leased } = await Films.create(req.body)
    return res.json({
      id,
      title,
      movie_director,
      leased
    });
}
async lease(req,res){
  const schema = Yup.object().shape({
    id: Yup.string().required(),
   });
   if (!(await schema.isValid(req.body))) {
     return res.status(400).json({ error: ' Validation fails' });
   }
   const {id}= req.body
   const findFilm = await Films.findOne({ where:{id}})

   if(!findFilm) res.status(500).json({ error: 'The movie was not found'})
   if(findFilm.leased == true ) res.status(400).json({ error: 'the movie has been leased'})

   findFilm.leased= true
   findFilm.save()

   return res.json(findFilm)
}
async returnFilm(req,res){
 const schema = Yup.object().shape({
    id: Yup.string().required(),
   });
   if (!(await schema.isValid(req.body))) {
     return res.status(400).json({ error: ' Validation fails' });
   }
   const {id}= req.body
   const findFilm = await Films.findOne({ where:{id}})

   if(!findFilm) res.status(500).json({ error: 'The movie was not found'})
   if(findFilm.leased == false ) res.status(400).json({ error: 'the movie has been returned'})
   
   findFilm.leased= false
   findFilm.save()

   return res.json(findFilm)
}
async availableFilms(req, res){
  const films = await Films.findAll({where:{leased: false}})
  const formatedListFilm = films.map(e => 
    { return{ title: e.title, movie_director: e.movie_director}})
  return res.json(formatedListFilm)
}
}
export default new FilmsController();