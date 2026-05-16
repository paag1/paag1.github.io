const map = [
    ["wall", "path", "photo1", "path", "wall", "wall", "wall", "wall"],
    ["wall", "path", "wall", "path", "wall", "photo9", "path", "path"],
    ["start", "path", "wall", "photo2", "wall", "path", "wall", "path"],
    ["wall", "wall", "wall", "path", "wall", "path", "wall", "photo10"],
    ["path", "path", "photo3", "path", "wall", "photo8", "wall", "path"],
    ["photo4", "wall", "wall", "wall", "wall", "path", "wall", "photo11"],
    ["path", "wall", "wall", "wall", "wall", "path", "wall", "path"],
    ["photo5", "path", "photo6", "path", "path", "photo7", "wall", "end"]
];

const events = {
    photo1: {
        image: "assets/multimedia/mi_niña(164).jpg",
        text: "Recuerdo mucho el día en que vi esta foto porque era en el tiempo en que nos estabamos conociendo y lo mucho que me quedaba enbobado con tus fotos de" +
            "insta, recuerdo que a cada rato entraba a tu cuenta de instagram solo para ver tus fotos porque me encantaba ver tus ojos, tu sonrisa (aunque casi no te gusta" +
            "sonreir), tus cachetitos, todo tu rostro porque para mi eras lo más hermoso que había visto y esta foto en particular me gusta mucho porque usabas lentes y eso te" +
            "hacía ver mucho más hermosa. Y así comienza este recorrido, espero te guste, mi niña hermosa. 💜"
    },
    photo2: {
        image: "assets/multimedia/mi_niña(157).jpg",
        text: "Estando en la actualidad, hace casi un año, en esa foto te veías tan hermosa. Con tu cabello peinado y hermoso, y ese vestido que se te veía super bonito " +
            "y claro, esa sonrisa tan hermosa que tienes y que me encanta. Sobre todo este día fue especial porque fue el día en que cumpliste tus hermosos 27 añitos y habías " +
            "a comer con tus papis (aunque no te gusto mucho el lugar jaja), pero pasaste un día lindo, sobre todo al final porque te lleve tu regalo y pude verte en tu " +
            "cumpleaños y ver en persona lo hermosa que estabas, después nos fuimos al boulevard a pasar un rato junto y platicar y creeme que fue un momento muy bello, " +
            "y después de un rato hablando nos fuimos a McDonalds a comer unos nuggets jaja y fue una noche muy linda... 💜"
    },
    photo3: {
        image: "assets/multimedia/mi_niña(156_2).jpg",
        text: "Y bueno, aunque no pudimos celebrar como se debe el día de tu cumpleaños, claro que no ibamos a dejar pasar esta oportunidad de celebrar tu vida y lo hermosa " +
            "persona que eres y obvio celebramos tu cumpleaños en un restaurante italiano, tú comida favorita, aunque en está ocasión no se pudo contar con tus amigos, no podía" +
            "faltar la que es tu mejor amiga y la pasamos bien, comimos rico y nos tomamos fotos y bueno, no puedo olvidar lo hermosa que te veías ese día. 💜 PD: Si, recorte la foto jajaja"
    },
    photo4: {
        image: "assets/multimedia/mi_niña(15_2).mp4",
        text: "Claro que no podía olvidar cuando fuimos a liverpool en búsqueda de mis mini carritos de lego de la Formula 1 donde fuiste mi amuletito de la suerte ya que " +
            "encontré el carrito que quería gracias a ti 💜💜💜. Ya después de que los conseguimos nos fuimos a buscar un lugar para poder armarlos " +
            "de una vez ahí mismo en la plaza jajaja y fue un momento muy lindo porque nos divertimos mucho armando el carrito y obvio, grabamos todo el proceso, lo cual me encanto 💜💜💜"
    },
    photo5: {
        image: "assets/multimedia/mi_niña(14_1).mp4",
        text: "Obvio que después fuimos por más carritos de lego, solo que en esta ocasión, te compre uno para que también tuvieras tu carrito de lego de la Formula 1 y moradito " +
            "como te encanta, y fuimos exactamente al mismo lugar para poder armarlos juntos jajaja y claro, fue un momento muy lindo y uno que me encanta porque te veías tan feliz " +
            "armando tu carrito junto conmigo y no puedo olvidar que también fuiste mi amuletito de la suerte de nuevo porque de una encontramos el que quería y por eso me encantas 💜💜"
    },
    photo6: {
        image: "assets/multimedia/mi_niña(123_1).mp4",
        text: "Este día no podía faltar, es uno de los que mas recuerdo porque en ese día nos dimos nuestros regalos navideños y claro, no puedo olvidar lo feliz y hermosa que " +
            "estabas por recibir tu regalo, créeme que fue tan lindo verte tan feliz y emocionada y a mi me puso muy feliz que te gustará tu regalo, tu collar de tulipan, una de tus " +
            "flores favoritas, y no podía olvidar el hermoso regalo que tú me diste, mi lego del carrito de Red Bull de la Formula 1, el cual de verdad me encantó como no tienes idea. " +
            "Fue una noche muy linda, la pasamos muy bien y disfrutamos de la vista del mar en el que yo creo, ya es nuestro lugar favorito para ir a pasar el rato y disfrutar de " +
            "nuestra compañía. 💜💜"
    },
    photo7: {
        image: "assets/multimedia/mi_niña(118).jpg",
        text: "Ya estamos al mitad de camino y no podía dejar pasar esta foto ya que es de mis los mejores días que he pasado contigo, ya que ese día me invitaste a pasar navidad con " +
            "tu familia y amistades y créeme que me sentí tan feliz de poder compartir ese día tan especial contigo y con tu familia, claro que me sentí un poco nervioso al principio porque era algo " +
            "nuevo para mi y no conocía a nadie de los demás invitador, solo a tus papis y a ti, pero después me sentí más comodo y la verdad me sentí acogido por todos, la pasamos " +
            "muy bien con los juegos que hubo, gane varios regalitos en los juegos, pero lo mejor de esa noche, fue pasar tiempo contigo, sobre todo que después de eso nos fuimos con Isa " +
            "y después de Isa, bueno, nos fuimos a mi casa y paso yo creo, el mejor momento de esa noche. Por estos y más momentos así, mi niña hermosa 💜💜💜💜"
    },
    photo8: {
        image: "assets/multimedia/mi_niña(127_2).mp4",
        text: "Días después salimos a pasear y fuimos a comer a un nuevo lugar, un lugar muy lindo que nos encantó a ambos, pero no solo eso, también nos divertimos mucho porque " +
            "nos pusimos a armar el lego que me habías regalado en navidad y lo armamos ahí mismo en el restaurante jajaja, aunque eso sí, te desesperabas mucho porque no lo hacía " +
            "tan rápido como tú lo harías, al final no lo terminamos de armar en ese momento, pero lo poco que armamos fue muy divertido de hacer y obvio lo teníamos que preservar en video " +
            "porque fue un momento muy lindo a tu lado, disfrutar de las pequeñas cosas en compañia tuya es lo que más me gusta y espero seguir disfrutando de ellos 💜💜"
    },
    photo9: {
        image: "assets/multimedia/mi_niña(18).jpg",
        text: "Seguimos recorriendo hasta llegar a esta foto, fue donde por primera vez y no la última, te mande tu hermosas flores amarillas, sé que a lo mejor para muchos es un día " +
            "cualquiera, pero para ti era un día muy especial porque esa niña que tanto me gusta, anhelaba tener sus flores amarillas y en serio no te imaginas lo feliz que me hizo " +
            "poder darte ese detalle, te veías tan hermosa con esas flores, tu hermosa sonrisa y tu mirada tan linda y no cambiaría por nada del mundo ver tu rostro lleno de " +
            "alegría y felicidad, por eso me encantas tanto, mi niña preciosa 💜💜"
    },
    photo10: {
        image: "assets/multimedia/mi_niña(10).jpg",
        text: "Este día, este día yo creo fue uno de los mejores para ti porque pudiste ver el concierto de tus coreanos favoritos en vivo y en serio, ese día fue tan sorprendente incluso " + 
        "incluso para mi, no me esperaba todo lo que paso ese día, todo lo que sucedió dentro de la sala e incluso, lo volvería a hacer. No me arrepiento para nada el haberte regalado " + 
        "los boletos para que pudieras ver a tus 'esposos' en vivo, esa felicidad que sentiste, esa emoción, esa alegría, no la cambiaría nada del mundo y sé que pronto podrás tu suenño " + 
        "de verlos completamente en vivo y en persona en unos de sus conciertos y quien sabe, puede que incluso verlos en su país 💜💜💜💜💜"
    },
    photo11: {
        image: "assets/multimedia/mi_niña(5_1).mp4",
        text: "Ya casiiii llegamos al final de este recorrido y no podía no poner este momento que tuvimos juntos, cuando fuimos a jugar boliche por primera vez, ver lo sumamente competitivos " + 
        "que somos, lo divertido que fue jugar juntos y aunque tú me hayas ganada remontando la partida (quiero la revancha jaja), fue un momento tan lindo y divertido de haber compartido " + 
        "contigo. Y aunque aquí lleguemos al final de este recorrido, yo sé que seguiremos y seguiremos creando muchos más recuerdos juntos, recuerdos que llevaremos siempre en nuestros " + 
        "corazones y que nos harán sonreír cada que los recordemos porque quiero pasar el resto de mi vida junto a tu lado. Te amo con todo mi corazón, mi niña hermosa, preciosa, bonita 💜💜💜💜💜💜💜." + 
        ""
    },
    end: {
        final: true
    }
};