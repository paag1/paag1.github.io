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
        image: "assets/multimedia/mi_niña(15_1).mp4",
        text: "Contigo todo es mejor"
    },
    photo5: {
        image: "assets/multimedia/.jpg",
        text: "Juntos siempre"
    },
    photo6: {
        image: "assets/multimedia/.jpg",
        text: "Amor verdadero"
    },
    photo7: {
        image: "assets/multimedia/.jpg",
        text: "Memorias inolvidables"
    },
    photo8: {
        image: "assets/multimedia/.jpg",
        text: "Acompañame siempre"
    },
    photo9: {
        image: "assets/multimedia/.jpg",
        text: "Tu sonrisa ilumina mi vida"
    },
    photo10: {
        image: "assets/multimedia/.jpg",
        text: "Eres mi todo"
    },
    photo11: {
        image: "assets/multimedia/.jpg",
        text: "Eres mi todo"
    },
    end: {
        final: true
    }
};