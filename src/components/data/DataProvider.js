import Abstrait11 from '../content/abstrait/abstrait-1-1.jpg'
import Abstrait12 from '../content/abstrait/abstrait-1-2.jpg'
import Abstrait13 from '../content/abstrait/abstrait-1-3.jpg'
import Abstrait21 from '../content/abstrait/abstrait-2-1.jpg'
import Abstrait22 from '../content/abstrait/abstrait-2-2.jpg'
import Abstrait23 from '../content/abstrait/abstrait-2-3.jpg'
import Abstrait31 from '../content/abstrait/abstrait-3-1.jpg'
import Abstrait32 from '../content/abstrait/abstrait-3-2.jpg'
import Abstrait33 from '../content/abstrait/abstrait-3-3.jpg'
import Abstrait41 from '../content/abstrait/abstrait-4-1.jpg'
import Abstrait42 from '../content/abstrait/abstrait-4-2.jpg'
import Abstrait43 from '../content/abstrait/abstrait-4-3.jpg'
import Abstrait51 from '../content/abstrait/abstrait-5-1.jpg'
import Abstrait52 from '../content/abstrait/abstrait-5-2.jpg'
import Abstrait53 from '../content/abstrait/abstrait-5-3.jpg'
import Abstrait61 from '../content/abstrait/abstrait-6-1.jpg'
import Abstrait62 from '../content/abstrait/abstrait-6-2.jpg'
import Abstrait63 from '../content/abstrait/abstrait-6-3.jpg'
import Abstrait71 from '../content/abstrait/abstrait-7-1.jpg'
import Abstrait72 from '../content/abstrait/abstrait-7-2.jpg'
import Abstrait73 from '../content/abstrait/abstrait-7-3.jpg'
import Abstrait81 from '../content/abstrait/abstrait-8-1.jpg'
import Abstrait82 from '../content/abstrait/abstrait-8-2.jpg'
import Abstrait83 from '../content/abstrait/abstrait-8-3.jpg'

import Animals11 from '../content/animaux/animaux-1-1.jpg'
import Animals12 from '../content/animaux/animaux-1-2.jpg'
import Animals13 from '../content/animaux/animaux-1-3.jpg'
import Animals21 from '../content/animaux/animaux-2-1.jpg'
import Animals22 from '../content/animaux/animaux-2-2.jpg'
import Animals23 from '../content/animaux/animaux-2-3.jpg'
import Animals31 from '../content/animaux/animaux-3-1.jpg'
import Animals32 from '../content/animaux/animaux-3-2.jpg'
import Animals33 from '../content/animaux/animaux-3-3.jpg'
import Animals41 from '../content/animaux/animaux-4-1.jpg'
import Animals42 from '../content/animaux/animaux-4-2.jpg'
import Animals43 from '../content/animaux/animaux-4-3.jpg'
import Animals51 from '../content/animaux/animaux-5-1.jpg'
import Animals52 from '../content/animaux/animaux-5-2.jpg'
import Animals53 from '../content/animaux/animaux-5-3.jpg'
import Animals61 from '../content/animaux/animaux-6-1.jpg'
import Animals62 from '../content/animaux/animaux-6-2.jpg'
import Animals63 from '../content/animaux/animaux-6-3.jpg'
import Animals71 from '../content/animaux/animaux-7-1.jpg'
import Animals72 from '../content/animaux/animaux-7-2.jpg'
import Animals73 from '../content/animaux/animaux-7-3.jpg'

import Games11 from '../content/jeuxvideo/jeux_video-1-1.jpg'
import Games12 from '../content/jeuxvideo/jeux_video-1-2.jpg'
import Games13 from '../content/jeuxvideo/jeux_video-1-3.jpg'
import Games21 from '../content/jeuxvideo/jeux_video-2-1.jpg'
import Games22 from '../content/jeuxvideo/jeux_video-2-2.jpg'
import Games23 from '../content/jeuxvideo/jeux_video-2-3.jpg'

import Nature11 from '../content/nature/nature-1-1.jpg'
import Nature12 from '../content/nature/nature-1-2.jpg'
import Nature13 from '../content/nature/nature-1-3.jpg'
import Nature21 from '../content/nature/nature-2-1.jpg'
import Nature22 from '../content/nature/nature-2-2.jpg'
import Nature23 from '../content/nature/nature-2-3.jpg'
import Nature31 from '../content/nature/nature-3-1.jpg'
import Nature32 from '../content/nature/nature-3-2.jpg'
import Nature33 from '../content/nature/nature-3-3.jpg'

import City11 from '../content/ville/ville-1-1.jpg'
import City12 from '../content/ville/ville-1-2.jpg'
import City13 from '../content/ville/ville-1-3.jpg'
import City21 from '../content/ville/ville-2-1.jpg'
import City22 from '../content/ville/ville-2-2.jpg'
import City23 from '../content/ville/ville-2-3.jpg'
import City31 from '../content/ville/ville-3-1.jpg'
import City32 from '../content/ville/ville-3-2.jpg'
import City33 from '../content/ville/ville-3-3.jpg'

import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      "_id":"1",
      "name": "Scorpion",
      "description": "Aboraeque tabescebat Aboraeque invadere ante deinde indicio edictus proditus regionem",
      "price": 12,
      "categorie": "Abstrait",
      "dispo": false,
      "img": [
        Abstrait11,
        Abstrait12,
        Abstrait13
      ],
      "alt": [
        "abstrait-1-1",
        "abstrait-1-2",
        "abstrait-1-3"
      ],
      "source": "https://www.cdiscount.com/informatique/clavier-souris-webcam/jialong-tapis-de-souris-gaming-mousepad-xxl-grand/f-107021422-auc6691036421897.html",
      "count": 1 
    },
    {
      "_id": "2",
      "name": "Carte du monde",
      "description": "Extremum orbis vincens in adultam virum usque Alpes annis vitae",
      "price": 15,
      "categorie": "Abstrait",
      "dispo": false,
      "img": [
        Abstrait21,
        Abstrait22,
        Abstrait23
      ],
      "alt": [
        "abstrait-2-1",
        "abstrait-2-2",
        "abstrait-2-3"
      ],
      source: "https://www.amazon.fr/Eligoo-Mousepad-Clavier-Compatible-Optique/dp/B0723D5MJC/ref=sr_1_14?c=ts&dchild=1&keywords=Tapis+de+souris&qid=1617074982&refinements=p_89%3AAnpollo&s=computers&sr=1-14&ts_id=430278031",
      "count": 1
    },
    {
      "_id": "3",
      "name": "Fumée RGB",
      "description": "Tempus ex inmensus plaga incunabulis in fere vincens populus in.",
      "price": 15,
      "categorie": "Abstrait",
      "dispo": true,
      "img": [
        Abstrait31,
        Abstrait32,
        Abstrait33
      ],
      "alt": [
        "abstrait-3-1",
        "abstrait-3-2",
        "abstrait-3-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "4",
      "name": "ASUS ROG",
      "description": "De quidem fortasse sunt me ut Minime virtute ut earum.",
      "price": 15,
      "categorie": "Abstrait",
      "dispo": false,
      "img": [
        Abstrait41,
        Abstrait42,
        Abstrait43
      ],
      "alt": [
        "abstrait-4-1",
        "abstrait-4-2",
        "abstrait-4-3"
      ],
      "source": "https://rog.asus.com/mice-mouse-pads/mouse-pads/rog-sheath-model/",
      "count": 1
    },
    {
      "_id": "5",
      "name": "Mineral",
      "description": "Quae tuebatur quam agitabantur cum cerneret has oblatrantibus Vrsicinus varietates.",
      "price": 15,
      "categorie": "Abstrait",
      "dispo": true,
      "img": [
        Abstrait51,
        Abstrait52,
        Abstrait53
      ],
      "alt": [
        "abstrait-5-1",
        "abstrait-5-2",
        "abstrait-5-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "6",
      "name": "Lumière RGB",
      "description": "Paterfamilias susurrasset nullo ministro ministro arcanorum ideoque siquid penetrali ut.",
      "price": 15,
      "categorie": "Abstrait",
      "dispo": true,
      "img": [Abstrait61,Abstrait62,Abstrait63],
      "alt": [
        "abstrait-6-1",
        "abstrait-6-2",
        "abstrait-6-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "7",
      "name": "Vitres",
      "description": "Pacataeque sint certamina securitas nomen et auctoritate domina et licet.",
      "price": 15,
      "categorie": "Abstrait",
      "dispo": true,
      "img": [
        Abstrait71,
        Abstrait72,
        Abstrait73
      ],
      "alt": [
        "abstrait-7-1",
        "abstrait-7-2",
        "abstrait-7-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "8",
      "name": "Roche",
      "description": "Nobilitarunt aetatis sorore natus et patre imperatoris fratre Constantini Veternensi.",
      "price": 15,
      "categorie": "Abstrait",
      "dispo": true,
      "img": [
        Abstrait81,
        Abstrait82,
        Abstrait83
      ],
      "alt": [
        "abstrait-8-1",
        "abstrait-8-2",
        "abstrait-8-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "9",
      "name": "Flamants roses",
      "description": "Nullis passibus sunt cornuta locum cornuta quos etiam nondum montibus.",
      "price": 15,
      "size": "Large",
      "categorie": "Animaux",
      "dispo": true,
      "img": [
        Animals11,
        Animals12,
        Animals13
      ],
      "alt": [
        "animaux-1-1",
        "animaux-1-2",
        "animaux-1-3"
      ],
      "source": "https://www.amazon.es/Alfombrilla-de-rat%C3%B3n-extendida-para-Juegos-JIALONG-Base-de-Goma-Antideslizante-de-Gran-tama%C3%B1o-con-Bordes-cosidos-Ideal-para-Teclado-y-rat%C3%B3n-de-Ordenador-de-Oficina/dp/B08V54LV7M/ref=sr_1_22?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=jialong&qid=1617076746&s=computers&sr=1-22",
      "count": 1
      
    },
    {
      "_id": "10",
      "name": "Renard assoupi",
      "description": "Rem Catoni facta ipsum Catoni habetote autem sic De cave.",
      "price": 15,
      "categorie": "Animaux",
      "dispo": true,
      "img": [
        Animals21,
        Animals22,
        Animals23
      ],
      "alt": [
        "animaux-2-1",
        "animaux-2-2",
        "animaux-2-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "11",
      "name": "Lapins",
      "description": "Tum ut noctes turbinis etiam cornuta degressi Tullius nihil ideoque.",
      "price": 15,
      "categorie": "Animaux",
      "dispo": true,
      "img": [
        Animals31,
        Animals32,
        Animals33
      ],
      "alt": [
        "animaux-3-1",
        "animaux-3-2",
        "animaux-3-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "12",
      "name": "Cheval",
      "description": "Tribunus P eo et amantissime incidere profecto multis in domi.",
      "price": 15,
      "categorie": "Animaux",
      "dispo": true,
      "img": [
        Animals41,
        Animals42,
        Animals43
      ],
      "alt": [
        "animaux-4-1",
        "animaux-4-2",
        "animaux-4-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "13",
      "name": "Cheval au galop",
      "description": "Quo amicum se De benevolentiae nullam ferri se fines ferri.",
      "price": 15,
      "categorie": "Animaux",
      "dispo": true,
      "img": [
        Animals51,
        Animals52,
        Animals53
      ],
      "alt": [
        "animaux-5-1",
        "animaux-5-2",
        "animaux-5-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "14",
      "name": "Chat et lune",
      "description": "Diligendo ut ne cogitandum Quin in praeceptum si eum valet.",
      "price": 15,
      "categorie": "Animaux",
      "dispo": true,
      "img": [
        Animals61,
        Animals62,
        Animals63
      ],
      "alt": [
        "animaux-6-1",
        "animaux-6-2",
        "animaux-6-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "15",
      "name": "Lapereau",
      "description": "Imbres protector equitum populari translationem suspensus discerpti angorem populari emendabat.",
      "price": 15,
      "categorie": "Animaux",
      "dispo": true,
      "img": [
        Animals71,
        Animals72,
        Animals73
      ],
      "alt": [
        "animaux-7-1",
        "animaux-7-2",
        "animaux-7-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "16",
      "name": "League of Legends",
      "description": "Tempus lumen amicitia potest scelere sit amandi natura multo natura.",
      "price": 15,
      "categorie": "Jeux video",
      "dispo": false,
      "img": [
        Games11,
        Games12,
        Games13],
      "alt": [
        "jeux_video-1-1",
        "jeux_video-1-2",
        "jeux_video-1-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "17",
      "name": "Fortnite",
      "description": "In feriens gestu miles iam qui muri cunctorum scuta solido.",
      "price": 15,
      "categorie": "Jeux video",
      "dispo": false,
      "img": [
        Games21,
        Games22,
        Games23
      ],
      "alt": [
        "jeux_video-2-1",
        "jeux_video-2-2",
        "jeux_video-2-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "18",
      name: "Pont suspendu",
      description: "Rationabili restitisset intempestivam sub et quod Honoratus efferatus vilitatem uno.",
      price: 15,
      categorie: "Nature",
      dispo: true,
      img: [
        Nature11,
        Nature12,
        Nature13
      ],
      alt: [
        "nature-1-1",
        "nature-1-2",
        "nature-1-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "19",
      "name": "Cascade",
      "description": "Paterfamilias susurrasset nullo ministro ministro arcanorum ideoque siquid penetrali ut.",
      "price": 15,
      "categorie": "Nature",
      "dispo": true,
      "img": [
        Nature21,
        Nature22,
        Nature23
      ],
      "alt": [
        "nature-2-1",
        "nature-2-2",
        "nature-2-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "20",
      "name": "Cascade féérique",
      "description": "Amicitias debent sic modo quidam non modo modo qui contemni.",
      "price": 15,
      "categorie": "Nature",
      "dispo": true,
      "img": [
        Nature31,
        Nature32,
        Nature33
      ],
      "alt": [
        "nature-3-1",
        "nature-3-2",
        "nature-3-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "21",
      "name": "Ville avec fleuve",
      "description": "Seleucia ut claritudinis multa quam Claudiopolis quam coloniam antehac rebellatrix.",
      "price": 15,
      "categorie": "Ville",
      "dispo": true,
      "img": [
        City11,
        City12,
        City13
      ],
      "alt": [
        "ville-1-1",
        "ville-1-2",
        "ville-1-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "22",
      "name": "Vue aérienne",
      "description": "Siquid causarum Constantium in dissimilem causarum siquid et in peiores.",
      "price": 15,
      "categorie": "Ville",
      "dispo": true,
      "img": [
        City21,
        City22,
        City23
      ],
      "alt": [
        "ville-2-1",
        "ville-2-2",
        "ville-2-3"
      ],
      "source": "",
      "count": 1
    },
    {
      "_id": "23",
      "name": "Vue d'ensemble",
      "description": "Timore propinqua nostris praesidiis magna parte Pamphyliam deviis stataria populationum.",
      "price": 15,
      "categorie": "Ville",
      "dispo": true,
      "img": [
        City31,
        City32,
        City33
      ],
      "alt": [
        "ville-3-1",
        "ville-3-2",
        "ville-3-3"
      ],
      "source": "",
      "count": 1  
    }
  ])

  const [cart, setCart] = useState([])

  const addCart = (id) => {
    const check = cart.every(item => {
      return item._id !== id
    })
    if(check) {
      const data = products.filter(product => {
        return product._id === id
      })
      setCart([...cart, ...data])
    } else {
      toast.info("Vous avez déjà ajouté ce produit dans votre panier")
    }
  }

  useEffect(()=> {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if(dataCart) setCart(dataCart)
  },[])

  useEffect(() => {
    localStorage.setItem('dataCart',JSON.stringify(cart))
  })

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart
  }

  return (
    <DataContext.Provider value={value}>
      {props.children}      
    </DataContext.Provider>
  )
}
