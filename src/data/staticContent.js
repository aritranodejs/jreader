// Import additional content sections
import { bodyPartsContent, daysContent, monthsContent, weatherContent, verbsContent, professionsContent } from './additionalContent.js';

// Helper function to generate numbers 1-100
const generateNumbers = (lang) => {
    const colors = ['#FFD166', '#4CC9F0', '#7209B7', '#06D6A0', '#EF476F', '#F72585', '#118AB2', '#073B4C'];
    const emojis = ['🌟', '⭐', '✨', '💎', '🎯', '🎨', '🎭', '🎪', '🎡', '🎢'];

    const numberWords = {
        en: ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
            'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'],
        es: ['', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez',
            'Once', 'Doce', 'Trece', 'Catorce', 'Quince', 'Dieciséis', 'Diecisiete', 'Dieciocho', 'Diecinueve', 'Veinte'],
        bn: ['', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়', 'দশ',
            'এগারো', 'বারো', 'তেরো', 'চৌদ্দ', 'পনেরো', 'ষোল', 'সতেরো', 'আঠারো', 'ঊনিশ', 'বিশ']
    };

    const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    const convertToBengaliNumeral = (num) => {
        return String(num).split('').map(d => bengaliNumerals[parseInt(d)]).join('');
    };

    const numbers = [];

    for (let i = 1; i <= 100; i++) {
        const displayNum = lang === 'bn' ? convertToBengaliNumeral(i) : String(i);
        const word = i <= 20 ? numberWords[lang][i] : '';
        const subtitle = word ? `${word}` : `Number ${displayNum}`;

        if (lang === 'bn' && i > 20) {
            const bengaliWords = {
                21: 'একুশ', 22: 'বাইশ', 23: 'তেইশ', 24: 'চব্বিশ', 25: 'পঁচিশ',
                30: 'ত্রিশ', 40: 'চল্লিশ', 50: 'পঞ্চাশ', 60: 'ষাট', 70: 'সত্তর',
                80: 'আশি', 90: 'নব্বই', 100: 'একশ'
            };
            if (bengaliWords[i]) {
                numbers.push({
                    id: `m${i}`,
                    title: displayNum,
                    subtitle: bengaliWords[i],
                    emoji: emojis[i % 10],
                    color: colors[i % colors.length],
                    type: 'flashcard'
                });
                continue;
            }
        }

        numbers.push({
            id: `m${i}`,
            title: displayNum,
            subtitle: subtitle || (lang === 'bn' ? `সংখ্যা ${displayNum}` : lang === 'es' ? `Número ${i}` : `Number ${i}`),
            emoji: emojis[i % 10],
            color: colors[i % colors.length],
            type: 'flashcard'
        });
    }

    return numbers;
};

// Helper function to generate multiplication tables
const generateMultiplicationTables = (lang) => {
    const colors = ['#FFD166', '#4CC9F0', '#7209B7', '#06D6A0', '#EF476F', '#F72585', '#118AB2', '#073B4C'];
    const tables = [];

    const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const convertToBengaliNumeral = (num) => {
        return String(num).split('').map(d => bengaliNumerals[parseInt(d)]).join('');
    };

    const getTableLabel = (table, lang) => {
        if (lang === 'en') return `${table} Times Table`;
        if (lang === 'es') return `Tabla del ${table}`;
        if (lang === 'bn') {
            const num = convertToBengaliNumeral(table);
            return `${num} এর নামতা`;
        }
    };

    const getMultiplicationText = (a, b, result, lang) => {
        if (lang === 'en') return `${a} × ${b} = ${result}`;
        if (lang === 'es') return `${a} × ${b} = ${result}`;
        if (lang === 'bn') {
            const numA = convertToBengaliNumeral(a);
            const numB = convertToBengaliNumeral(b);
            const numResult = convertToBengaliNumeral(result);
            return `${numA} × ${numB} = ${numResult}`;
        }
    };

    for (let table = 1; table <= 10; table++) {
        const lines = [];
        for (let i = 1; i <= 10; i++) {
            lines.push(getMultiplicationText(table, i, table * i, lang));
        }

        tables.push({
            id: `t${table}`,
            title: getTableLabel(table, lang),
            subtitle: lines[0],
            emoji: '✖️',
            color: colors[table % colors.length],
            type: 'story',
            pages: lines.map((line, idx) => ({
                text: line,
                color: colors[(table + idx) % colors.length]
            }))
        });
    }

    return tables;
};

// Story content
const storyContent = {
    en: [
        {
            id: 's1', title: "The Happy Cloud", author: "Sky Walker", color: "#4CC9F0", emoji: "☁️", type: 'story', pages: [
                { text: "Once upon a time, there was a little cloud.", color: "#4CC9F0" },
                { text: "He loved to float in the blue sky.", color: "#48CAE4" },
                { text: "He made shapes for the children below.", color: "#90E0EF" },
                { text: "Everyone loved the Happy Cloud!", color: "#CAF0F8" }
            ]
        },
        {
            id: 's2', title: "Little Lion's Roar", author: "Jungle King", color: "#FFD166", emoji: "🦁", type: 'story', pages: [
                { text: "Little Lion wanted to roar.", color: "#FFD166" },
                { text: "He opened his mouth wide...", color: "#FFC300" },
                { text: "'Squeak!' came out instead.", color: "#FFB703" },
                { text: "He kept practicing until... ROAR!", color: "#FB8500" }
            ]
        },
        {
            id: 's3', title: "Space Adventure", author: "Star Gazer", color: "#7209B7", emoji: "🚀", type: 'story', pages: [
                { text: "3... 2... 1... Blast off!", color: "#7209B7" },
                { text: "Zooming past the moon.", color: "#560BAD" },
                { text: "Look at all the shiny stars.", color: "#480CA8" },
                { text: "Space is so big and beautiful.", color: "#3A0CA3" }
            ]
        },
        {
            id: 's4', title: "Magic Garden", author: "Flower Fairy", color: "#EF476F", emoji: "🌸", type: 'story', pages: [
                { text: "In a secret garden...", color: "#EF476F" },
                { text: "Flowers bloomed with magic light.", color: "#F72585" },
                { text: "Butterflies danced all around.", color: "#B5179E" },
                { text: "It was the most beautiful place!", color: "#7209B7" }
            ]
        },
        {
            id: 's5', title: "Robot Friend", author: "Tech Tom", color: "#118AB2", emoji: "🤖", type: 'story', pages: [
                { text: "Beep boop! Meet Robo.", color: "#118AB2" },
                { text: "He helps children learn.", color: "#06D6A0" },
                { text: "He loves to dance and play.", color: "#073B4C" },
                { text: "Robots can be friends too!", color: "#0091AD" }
            ]
        },
        {
            id: 's6', title: "The Brave Butterfly", author: "Nature Nancy", color: "#F72585", emoji: "🦋", type: 'story', pages: [
                { text: "A tiny caterpillar dreamed of flying.", color: "#F72585" },
                { text: "She waited patiently in her cocoon.", color: "#B5179E" },
                { text: "One day, beautiful wings appeared!", color: "#7209B7" },
                { text: "Now she flies high in the sky!", color: "#560BAD" }
            ]
        },
        {
            id: 's7', title: "Under the Sea", author: "Ocean Ollie", color: "#06D6A0", emoji: "🐠", type: 'story', pages: [
                { text: "Deep down in the ocean...", color: "#06D6A0" },
                { text: "Colorful fish swim and play.", color: "#4CC9F0" },
                { text: "Coral reefs are like rainbows!", color: "#48CAE4" },
                { text: "The sea is full of wonder!", color: "#90E0EF" }
            ]
        },
        {
            id: 's8', title: "Dinosaur Discovery", author: "Dino Dan", color: "#06D6A0", emoji: "🦕", type: 'story', pages: [
                { text: "Long, long ago, dinosaurs ruled!", color: "#06D6A0" },
                { text: "Some were big, some were small.", color: "#26A69A" },
                { text: "They walked, swam, and flew.", color: "#00897B" },
                { text: "Now we find their amazing fossils!", color: "#00695C" }
            ]
        },
        // Additional stories for MVP
        {
            id: 's9', title: "The Kind Tree", author: "Forest Friend", color: "#06D6A0", emoji: "🌳", type: 'story', pages: [
                { text: "A big old tree stood in the park.", color: "#06D6A0" },
                { text: "Birds made nests in its branches.", color: "#26A69A" },
                { text: "Children played under its shade.", color: "#00897B" },
                { text: "The tree was happy helping everyone!", color: "#059669" }
            ]
        },
        {
            id: 's10', title: "Rainbow Friends", author: "Color Carl", color: "#F72585", emoji: "🌈", type: 'story', pages: [
                { text: "Seven colorful friends lived in the sky.", color: "#EF476F" },
                { text: "Red, Orange, Yellow, Green...", color: "#FFD166" },
                { text: "Blue, Indigo, and Violet!", color: "#4CC9F0" },
                { text: "Together they made the most beautiful rainbow!", color: "#7209B7" }
            ]
        },
        {
            id: 's11', title: "Moonlight Adventure", author: "Star Seeker", color: "#073B4C", emoji: "🌙", type: 'story', pages: [
                { text: "The moon smiled down at night.", color: "#073B4C" },
                { text: "Stars twinkled all around.", color: "#118AB2" },
                { text: "Owl hooted a gentle song.", color: "#4CC9F0" },
                { text: "The night was peaceful and calm.", color: "#90E0EF" }
            ]
        },
        {
            id: 's12', title: "Busy Bees", author: "Honey Harry", color: "#FFD166", emoji: "🐝", type: 'story', pages: [
                { text: "Buzz buzz! The bees were working.", color: "#FFD166" },
                { text: "They collected nectar from flowers.", color: "#FFC300" },
                { text: "They made sweet, golden honey.", color: "#FFB703" },
                { text: "Everyone loved the busy bees!", color: "#FB8500" }
            ]
        }
    ],
    es: [
        {
            id: 's1', title: "La Nube Feliz", author: "Caminante del Cielo", color: "#4CC9F0", emoji: "☁️", type: 'story', pages: [
                { text: "Había una vez una pequeña nube.", color: "#4CC9F0" },
                { text: "Le encantaba flotar en el cielo azul.", color: "#48CAE4" },
                { text: "Hacía formas para los niños de abajo.", color: "#90E0EF" },
                { text: "¡Todos amaban a la Nube Feliz!", color: "#CAF0F8" }
            ]
        },
        {
            id: 's2', title: "El Rugido del León", author: "Rey de la Selva", color: "#FFD166", emoji: "🦁", type: 'story', pages: [
                { text: "El pequeño león quería rugir.", color: "#FFD166" },
                { text: "Abrió mucho la boca...", color: "#FFC300" },
                { text: "¡Salió un 'Squeak'!", color: "#FFB703" },
                { text: "Siguió practicando hasta que... ¡ROAR!", color: "#FB8500" }
            ]
        },
        {
            id: 's3', title: "Aventura Espacial", author: "Observador de Estrellas", color: "#7209B7", emoji: "🚀", type: 'story', pages: [
                { text: "3... 2... 1... ¡Despegue!", color: "#7209B7" },
                { text: "Pasando por la luna.", color: "#560BAD" },
                { text: "Mira todas las estrellas brillantes.", color: "#480CA8" },
                { text: "El espacio es tan grande y hermoso.", color: "#3A0CA3" }
            ]
        },
        {
            id: 's4', title: "Jardín Mágico", author: "Hada de Flores", color: "#EF476F", emoji: "🌸", type: 'story', pages: [
                { text: "En un jardín secreto...", color: "#EF476F" },
                { text: "Las flores brillaban con luz mágica.", color: "#F72585" },
                { text: "Las mariposas bailaban alrededor.", color: "#B5179E" },
                { text: "¡Era el lugar más hermoso!", color: "#7209B7" }
            ]
        },
        {
            id: 's5', title: "Amigo Robot", author: "Tom Tecnológico", color: "#118AB2", emoji: "🤖", type: 'story', pages: [
                { text: "¡Bip bup! Conoce a Robo.", color: "#118AB2" },
                { text: "Ayuda a los niños a aprender.", color: "#06D6A0" },
                { text: "Le encanta bailar y jugar.", color: "#073B4C" },
                { text: "¡Los robots también pueden ser amigos!", color: "#0091AD" }
            ]
        },
        {
            id: 's6', title: "La Mariposa Valiente", author: "Nancy Naturaleza", color: "#F72585", emoji: "🦋", type: 'story', pages: [
                { text: "Una oruga pequeña soñaba con volar.", color: "#F72585" },
                { text: "Esperó pacientemente en su capullo.", color: "#B5179E" },
                { text: "¡Un día, aparecieron hermosas alas!", color: "#7209B7" },
                { text: "¡Ahora vuela alto en el cielo!", color: "#560BAD" }
            ]
        },
        {
            id: 's7', title: "Bajo el Mar", author: "Ollie Océano", color: "#06D6A0", emoji: "🐠", type: 'story', pages: [
                { text: "En lo profundo del océano...", color: "#06D6A0" },
                { text: "Los peces coloridos nadan y juegan.", color: "#4CC9F0" },
                { text: "¡Los arrecifes de coral son como arcoíris!", color: "#48CAE4" },
                { text: "¡El mar está lleno de maravillas!", color: "#90E0EF" }
            ]
        },
        {
            id: 's8', title: "Descubrimiento de Dinosaurios", author: "Dan Dino", color: "#06D6A0", emoji: "🦕", type: 'story', pages: [
                { text: "¡Hace mucho tiempo, los dinosaurios gobernaban!", color: "#06D6A0" },
                { text: "Algunos eran grandes, otros pequeños.", color: "#26A69A" },
                { text: "Caminaban, nadaban y volaban.", color: "#00897B" },
                { text: "¡Ahora encontramos sus fósiles increíbles!", color: "#00695C" }
            ]
        },
        {
            id: 's9', title: "El Árbol Amable", author: "Amigo del Bosque", color: "#06D6A0", emoji: "🌳", type: 'story', pages: [
                { text: "Un gran árbol viejo estaba en el parque.", color: "#06D6A0" },
                { text: "Los pájaros hacían nidos en sus ramas.", color: "#26A69A" },
                { text: "Los niños jugaban bajo su sombra.", color: "#00897B" },
                { text: "¡El árbol estaba feliz ayudando a todos!", color: "#059669" }
            ]
        },
        {
            id: 's10', title: "Amigos del Arcoíris", author: "Carlos Color", color: "#F72585", emoji: "🌈", type: 'story', pages: [
                { text: "Siete amigos coloridos vivían en el cielo.", color: "#EF476F" },
                { text: "Rojo, Naranja, Amarillo, Verde...", color: "#FFD166" },
                { text: "¡Azul, Índigo y Violeta!", color: "#4CC9F0" },
                { text: "¡Juntos hicieron el arcoíris más hermoso!", color: "#7209B7" }
            ]
        },
        {
            id: 's11', title: "Aventura a la Luz de la Luna", author: "Buscador de Estrellas", color: "#073B4C", emoji: "🌙", type: 'story', pages: [
                { text: "La luna sonreía por la noche.", color: "#073B4C" },
                { text: "Las estrellas parpadeaban alrededor.", color: "#118AB2" },
                { text: "El búho ululaba una canción suave.", color: "#4CC9F0" },
                { text: "La noche era pacífica y tranquila.", color: "#90E0EF" }
            ]
        },
        {
            id: 's12', title: "Abejas Ocupadas", author: "Harry Miel", color: "#FFD166", emoji: "🐝", type: 'story', pages: [
                { text: "¡Zumbido zumbido! Las abejas trabajaban.", color: "#FFD166" },
                { text: "Recolectaban néctar de las flores.", color: "#FFC300" },
                { text: "Hacían miel dulce y dorada.", color: "#FFB703" },
                { text: "¡A todos les encantaban las abejas ocupadas!", color: "#FB8500" }
            ]
        }
    ],
    bn: [
        {
            id: 's1', title: "সুখী মেঘ", author: "আকাশ ওয়াকার", color: "#4CC9F0", emoji: "☁️", type: 'story', pages: [
                { text: "একবার একটি ছোট মেঘ ছিল।", color: "#4CC9F0" },
                { text: "সে নীল আকাশে ভাসতে ভালোবাসত।", color: "#48CAE4" },
                { text: "সে নিচের শিশুদের জন্য আকৃতি তৈরি করত।", color: "#90E0EF" },
                { text: "সবাই সুখী মেঘকে ভালোবাসত!", color: "#CAF0F8" }
            ]
        },
        {
            id: 's2', title: "ছোট সিংহের গর্জন", author: "জঙ্গল রাজা", color: "#FFD166", emoji: "🦁", type: 'story', pages: [
                { text: "ছোট সিংহ গর্জন করতে চাইত।", color: "#FFD166" },
                { text: "সে তার মুখ খুব চওড়া করল...", color: "#FFC300" },
                { text: "'চিক!' শব্দ বেরিয়ে এল।", color: "#FFB703" },
                { text: "সে অনুশীলন করল যতক্ষণ না... গর্জন!", color: "#FB8500" }
            ]
        },
        {
            id: 's3', title: "মহাকাশ অভিযান", author: "তারা পর্যবেক্ষক", color: "#7209B7", emoji: "🚀", type: 'story', pages: [
                { text: "৩... ২... ১... উড়াল!", color: "#7209B7" },
                { text: "চাঁদের পাশ দিয়ে যাচ্ছি।", color: "#560BAD" },
                { text: "সব উজ্জ্বল তারা দেখো।", color: "#480CA8" },
                { text: "মহাকাশ কত বড় এবং সুন্দর।", color: "#3A0CA3" }
            ]
        },
        {
            id: 's4', title: "জাদুর বাগান", author: "ফুল পরী", color: "#EF476F", emoji: "🌸", type: 'story', pages: [
                { text: "একটি গোপন বাগানে...", color: "#EF476F" },
                { text: "ফুলগুলি জাদুর আলোয় ফুটত।", color: "#F72585" },
                { text: "প্রজাপতিরা চারপাশে নাচত।", color: "#B5179E" },
                { text: "এটি সবচেয়ে সুন্দর জায়গা ছিল!", color: "#7209B7" }
            ]
        },
        {
            id: 's5', title: "রোবট বন্ধু", author: "টেক টম", color: "#118AB2", emoji: "🤖", type: 'story', pages: [
                { text: "বিপ বুপ! রোবোর সাথে দেখা করো।", color: "#118AB2" },
                { text: "সে শিশুদের শিখতে সাহায্য করে।", color: "#06D6A0" },
                { text: "সে নাচতে এবং খেলতে ভালোবাসে।", color: "#073B4C" },
                { text: "রোবটও বন্ধু হতে পারে!", color: "#0091AD" }
            ]
        },
        {
            id: 's6', title: "সাহসী প্রজাপতি", author: "প্রকৃতি ন্যান্সি", color: "#F72585", emoji: "🦋", type: 'story', pages: [
                { text: "একটি ছোট শুঁয়োপোকা উড়ার স্বপ্ন দেখত।", color: "#F72585" },
                { text: "সে তার গুটিতে ধৈর্য ধরে অপেক্ষা করল।", color: "#B5179E" },
                { text: "একদিন, সুন্দর ডানা দেখা দিল!", color: "#7209B7" },
                { text: "এখন সে আকাশে উঁচুতে উড়ে!", color: "#560BAD" }
            ]
        },
        {
            id: 's7', title: "সমুদ্রের নিচে", author: "মহাসাগর অলি", color: "#06D6A0", emoji: "🐠", type: 'story', pages: [
                { text: "সমুদ্রের গভীরে...", color: "#06D6A0" },
                { text: "রঙিন মাছ সাঁতার কাটে এবং খেলে।", color: "#4CC9F0" },
                { text: "প্রবাল প্রাচীর রংধনুর মতো!", color: "#48CAE4" },
                { text: "সমুদ্র আশ্চর্যে পূর্ণ!", color: "#90E0EF" }
            ]
        },
        {
            id: 's8', title: "ডাইনোসর আবিষ্কার", author: "ডিনো ড্যান", color: "#06D6A0", emoji: "🦕", type: 'story', pages: [
                { text: "অনেক আগে, ডাইনোসররা শাসন করত!", color: "#06D6A0" },
                { text: "কিছু বড় ছিল, কিছু ছোট।", color: "#26A69A" },
                { text: "তারা হাঁটত, সাঁতার কাটত এবং উড়ত।", color: "#00897B" },
                { text: "এখন আমরা তাদের অসাধারণ জীবাশ্ম খুঁজে পাই!", color: "#00695C" }
            ]
        },
        {
            id: 's9', title: "দয়ালু গাছ", author: "বন বন্ধু", color: "#06D6A0", emoji: "🌳", type: 'story', pages: [
                { text: "পার্কে একটি বড় পুরানো গাছ ছিল।", color: "#06D6A0" },
                { text: "পাখিরা তার ডালে বাসা বানাত।", color: "#26A69A" },
                { text: "শিশুরা তার ছায়ায় খেলত।", color: "#00897B" },
                { text: "গাছটি সবাইকে সাহায্য করে খুশি ছিল!", color: "#059669" }
            ]
        },
        {
            id: 's10', title: "রংধনু বন্ধুরা", author: "রঙ কার্ল", color: "#F72585", emoji: "🌈", type: 'story', pages: [
                { text: "সাতটি রঙিন বন্ধু আকাশে বাস করত।", color: "#EF476F" },
                { text: "লাল, কমলা, হলুদ, সবুজ...", color: "#FFD166" },
                { text: "নীল, ইন্ডিগো এবং বেগুনি!", color: "#4CC9F0" },
                { text: "একসাথে তারা সবচেয়ে সুন্দর রংধনু তৈরি করল!", color: "#7209B7" }
            ]
        },
        {
            id: 's11', title: "চাঁদের আলোয় অভিযান", author: "তারা সন্ধানী", color: "#073B4C", emoji: "🌙", type: 'story', pages: [
                { text: "চাঁদ রাতে হাসছিল।", color: "#073B4C" },
                { text: "তারারা চারপাশে ঝিকমিক করছিল।", color: "#118AB2" },
                { text: "পেঁচা মৃদু গান গাইল।", color: "#4CC9F0" },
                { text: "রাতটি শান্ত এবং নিরব ছিল।", color: "#90E0EF" }
            ]
        },
        {
            id: 's12', title: "ব্যস্ত মৌমাছি", author: "মধু হ্যারি", color: "#FFD166", emoji: "🐝", type: 'story', pages: [
                { text: "গুঞ্জন গুঞ্জন! মৌমাছিরা কাজ করছিল।", color: "#FFD166" },
                { text: "তারা ফুল থেকে মধু সংগ্রহ করছিল।", color: "#FFC300" },
                { text: "তারা মিষ্টি, সোনালি মধু তৈরি করল।", color: "#FFB703" },
                { text: "সবাই ব্যস্ত মৌমাছিদের ভালোবাসত!", color: "#FB8500" }
            ]
        }
    ]
};

// Alphabet content (keep existing)
const alphabetContent = {
    en: [
        { id: 'a1', title: "A", subtitle: "Apple", emoji: "🍎", color: "#EF476F", type: 'flashcard' },
        { id: 'a2', title: "B", subtitle: "Ball", emoji: "⚽", color: "#FFD166", type: 'flashcard' },
        { id: 'a3', title: "C", subtitle: "Cat", emoji: "🐱", color: "#06D6A0", type: 'flashcard' },
        { id: 'a4', title: "D", subtitle: "Dog", emoji: "🐶", color: "#118AB2", type: 'flashcard' },
        { id: 'a5', title: "E", subtitle: "Elephant", emoji: "🐘", color: "#073B4C", type: 'flashcard' },
        { id: 'a6', title: "F", subtitle: "Fish", emoji: "🐠", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a7', title: "G", subtitle: "Grapes", emoji: "🍇", color: "#7209B7", type: 'flashcard' },
        { id: 'a8', title: "H", subtitle: "House", emoji: "🏠", color: "#F72585", type: 'flashcard' },
        { id: 'a9', title: "I", subtitle: "Ice Cream", emoji: "🍦", color: "#FFD166", type: 'flashcard' },
        { id: 'a10', title: "J", subtitle: "Jellyfish", emoji: "🪼", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a11', title: "K", subtitle: "Kite", emoji: "🪁", color: "#EF476F", type: 'flashcard' },
        { id: 'a12', title: "L", subtitle: "Lion", emoji: "🦁", color: "#FFD166", type: 'flashcard' },
        { id: 'a13', title: "M", subtitle: "Moon", emoji: "🌙", color: "#7209B7", type: 'flashcard' },
        { id: 'a14', title: "N", subtitle: "Nest", emoji: "🪺", color: "#06D6A0", type: 'flashcard' },
        { id: 'a15', title: "O", subtitle: "Orange", emoji: "🍊", color: "#FFD166", type: 'flashcard' },
        { id: 'a16', title: "P", subtitle: "Penguin", emoji: "🐧", color: "#118AB2", type: 'flashcard' },
        { id: 'a17', title: "Q", subtitle: "Queen", emoji: "👸", color: "#F72585", type: 'flashcard' },
        { id: 'a18', title: "R", subtitle: "Rainbow", emoji: "🌈", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a19', title: "S", subtitle: "Sun", emoji: "☀️", color: "#FFD166", type: 'flashcard' },
        { id: 'a20', title: "T", subtitle: "Tree", emoji: "🌳", color: "#06D6A0", type: 'flashcard' },
        { id: 'a21', title: "U", subtitle: "Umbrella", emoji: "☂️", color: "#EF476F", type: 'flashcard' },
        { id: 'a22', title: "V", subtitle: "Violin", emoji: "🎻", color: "#7209B7", type: 'flashcard' },
        { id: 'a23', title: "W", subtitle: "Watermelon", emoji: "🍉", color: "#EF476F", type: 'flashcard' },
        { id: 'a24', title: "X", subtitle: "Xylophone", emoji: "🎵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a25', title: "Y", subtitle: "Yak", emoji: "🦬", color: "#073B4C", type: 'flashcard' },
        { id: 'a26', title: "Z", subtitle: "Zebra", emoji: "🦓", color: "#118AB2", type: 'flashcard' },
    ],
    es: [
        { id: 'a1', title: "A", subtitle: "Avión", emoji: "✈️", color: "#EF476F", type: 'flashcard' },
        { id: 'a2', title: "B", subtitle: "Barco", emoji: "⛵", color: "#FFD166", type: 'flashcard' },
        { id: 'a3', title: "C", subtitle: "Casa", emoji: "🏠", color: "#06D6A0", type: 'flashcard' },
        { id: 'a4', title: "D", subtitle: "Dedo", emoji: "👆", color: "#118AB2", type: 'flashcard' },
        { id: 'a5', title: "E", subtitle: "Elefante", emoji: "🐘", color: "#073B4C", type: 'flashcard' },
        { id: 'a6', title: "F", subtitle: "Flor", emoji: "🌸", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a7', title: "G", subtitle: "Gato", emoji: "🐱", color: "#7209B7", type: 'flashcard' },
        { id: 'a8', title: "H", subtitle: "Helado", emoji: "🍦", color: "#F72585", type: 'flashcard' },
        { id: 'a9', title: "I", subtitle: "Isla", emoji: "🏝️", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a10', title: "J", subtitle: "Jirafa", emoji: "🦒", color: "#FFD166", type: 'flashcard' },
        { id: 'a11', title: "K", subtitle: "Koala", emoji: "🐨", color: "#06D6A0", type: 'flashcard' },
        { id: 'a12', title: "L", subtitle: "Luna", emoji: "🌙", color: "#7209B7", type: 'flashcard' },
        { id: 'a13', title: "M", subtitle: "Mariposa", emoji: "🦋", color: "#F72585", type: 'flashcard' },
        { id: 'a14', title: "N", subtitle: "Nube", emoji: "☁️", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a15', title: "O", subtitle: "Oso", emoji: "🐻", color: "#073B4C", type: 'flashcard' },
        { id: 'a16', title: "P", subtitle: "Pájaro", emoji: "🐦", color: "#118AB2", type: 'flashcard' },
        { id: 'a17', title: "Q", subtitle: "Queso", emoji: "🧀", color: "#FFD166", type: 'flashcard' },
        { id: 'a18', title: "R", subtitle: "Rosa", emoji: "🌹", color: "#EF476F", type: 'flashcard' },
        { id: 'a19', title: "S", subtitle: "Sol", emoji: "☀️", color: "#FFD166", type: 'flashcard' },
        { id: 'a20', title: "T", subtitle: "Tigre", emoji: "🐯", color: "#FFD166", type: 'flashcard' },
        { id: 'a21', title: "U", subtitle: "Uva", emoji: "🍇", color: "#7209B7", type: 'flashcard' },
        { id: 'a22', title: "V", subtitle: "Vaca", emoji: "🐄", color: "#06D6A0", type: 'flashcard' },
        { id: 'a23', title: "W", subtitle: "WiFi", emoji: "📶", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a24', title: "X", subtitle: "Xilófono", emoji: "🎵", color: "#F72585", type: 'flashcard' },
        { id: 'a25', title: "Y", subtitle: "Yogur", emoji: "🥛", color: "#FFD166", type: 'flashcard' },
        { id: 'a26', title: "Z", subtitle: "Zapato", emoji: "👟", color: "#EF476F", type: 'flashcard' },
    ],
    bn: [
        // Vowels (স্বরবর্ণ)
        { id: 'a1', title: "অ", subtitle: "অজগর", emoji: "🐍", color: "#EF476F", type: 'flashcard' },
        { id: 'a2', title: "আ", subtitle: "আম", emoji: "🥭", color: "#FFD166", type: 'flashcard' },
        { id: 'a3', title: "ই", subtitle: "ইঁদুর", emoji: "🐭", color: "#06D6A0", type: 'flashcard' },
        { id: 'a4', title: "ঈ", subtitle: "ঈগল", emoji: "🦅", color: "#118AB2", type: 'flashcard' },
        { id: 'a5', title: "উ", subtitle: "উট", emoji: "🐪", color: "#073B4C", type: 'flashcard' },
        { id: 'a6', title: "ঊ", subtitle: "ঊর্ধ্ব", emoji: "⬆️", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a7', title: "ঋ", subtitle: "ঋতু", emoji: "🌸", color: "#F72585", type: 'flashcard' },
        { id: 'a8', title: "এ", subtitle: "একতারা", emoji: "🎸", color: "#7209B7", type: 'flashcard' },
        { id: 'a9', title: "ঐ", subtitle: "ঐরাবত", emoji: "🐘", color: "#F72585", type: 'flashcard' },
        { id: 'a10', title: "ও", subtitle: "ওল", emoji: "🥔", color: "#06D6A0", type: 'flashcard' },
        { id: 'a11', title: "ঔ", subtitle: "ঔষধ", emoji: "💊", color: "#EF476F", type: 'flashcard' },

        // Consonants (ব্যঞ্জনবর্ণ)
        { id: 'a12', title: "ক", subtitle: "কলা", emoji: "🍌", color: "#FFD166", type: 'flashcard' },
        { id: 'a13', title: "খ", subtitle: "খরগোশ", emoji: "🐰", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a14', title: "গ", subtitle: "গাছ", emoji: "🌳", color: "#06D6A0", type: 'flashcard' },
        { id: 'a15', title: "ঘ", subtitle: "ঘর", emoji: "🏠", color: "#7209B7", type: 'flashcard' },
        { id: 'a16', title: "ঙ", subtitle: "বাঙালি", emoji: "🇧🇩", color: "#118AB2", type: 'flashcard' },
        { id: 'a17', title: "চ", subtitle: "চাঁদ", emoji: "🌙", color: "#118AB2", type: 'flashcard' },
        { id: 'a18', title: "ছ", subtitle: "ছাতা", emoji: "☂️", color: "#EF476F", type: 'flashcard' },
        { id: 'a19', title: "জ", subtitle: "জাহাজ", emoji: "⛵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a20', title: "ঝ", subtitle: "ঝরনা", emoji: "🌊", color: "#06D6A0", type: 'flashcard' },
        { id: 'a21', title: "ঞ", subtitle: "ঞা", emoji: "📖", color: "#F72585", type: 'flashcard' },
        { id: 'a22', title: "ট", subtitle: "টমেটো", emoji: "🍅", color: "#EF476F", type: 'flashcard' },
        { id: 'a23', title: "ঠ", subtitle: "ঠোঁট", emoji: "👄", color: "#F72585", type: 'flashcard' },
        { id: 'a24', title: "ড", subtitle: "ডাব", emoji: "🥥", color: "#06D6A0", type: 'flashcard' },
        { id: 'a25', title: "ঢ", subtitle: "ঢাকা", emoji: "🏙️", color: "#118AB2", type: 'flashcard' },
        { id: 'a26', title: "ণ", subtitle: "গণিত", emoji: "🔢", color: "#7209B7", type: 'flashcard' },
        { id: 'a27', title: "ত", subtitle: "তারা", emoji: "⭐", color: "#FFD166", type: 'flashcard' },
        { id: 'a28', title: "থ", subtitle: "থালা", emoji: "🍽️", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a29', title: "দ", subtitle: "দাঁত", emoji: "🦷", color: "#EF476F", type: 'flashcard' },
        { id: 'a30', title: "ধ", subtitle: "ধান", emoji: "🌾", color: "#06D6A0", type: 'flashcard' },
        { id: 'a31', title: "ন", subtitle: "নৌকা", emoji: "⛵", color: "#118AB2", type: 'flashcard' },
        { id: 'a32', title: "প", subtitle: "পাখি", emoji: "🐦", color: "#7209B7", type: 'flashcard' },
        { id: 'a33', title: "ফ", subtitle: "ফুল", emoji: "🌸", color: "#F72585", type: 'flashcard' },
        { id: 'a34', title: "ব", subtitle: "বই", emoji: "📚", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a35', title: "ভ", subtitle: "ভালুক", emoji: "🐻", color: "#073B4C", type: 'flashcard' },
        { id: 'a36', title: "ম", subtitle: "মাছ", emoji: "🐠", color: "#06D6A0", type: 'flashcard' },
        { id: 'a37', title: "য", subtitle: "যান", emoji: "🚗", color: "#FFD166", type: 'flashcard' },
        { id: 'a38', title: "র", subtitle: "রথ", emoji: "🛞", color: "#EF476F", type: 'flashcard' },
        { id: 'a39', title: "ল", subtitle: "লাউ", emoji: "🥒", color: "#06D6A0", type: 'flashcard' },
        { id: 'a40', title: "শ", subtitle: "শাল", emoji: "🧣", color: "#F72585", type: 'flashcard' },
        { id: 'a41', title: "ষ", subtitle: "ষড়যন্ত্র", emoji: "🤫", color: "#7209B7", type: 'flashcard' },
        { id: 'a42', title: "স", subtitle: "সূর্য", emoji: "☀️", color: "#FFD166", type: 'flashcard' },
        { id: 'a43', title: "হ", subtitle: "হাতি", emoji: "🐘", color: "#118AB2", type: 'flashcard' },

        // Modified consonants (যুক্তাক্ষর)
        { id: 'a44', title: "ড়", subtitle: "পাড়া", emoji: "🏘️", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a45', title: "ঢ়", subtitle: "গঢ়", emoji: "🏗️", color: "#06D6A0", type: 'flashcard' },
        { id: 'a46', title: "য়", subtitle: "ময়ূর", emoji: "🦚", color: "#7209B7", type: 'flashcard' },
        { id: 'a47', title: "ৎ", subtitle: "উৎসব", emoji: "🎉", color: "#F72585", type: 'flashcard' },
        { id: 'a48', title: "ং", subtitle: "রং", emoji: "🎨", color: "#FFD166", type: 'flashcard' },
        { id: 'a49', title: "ঃ", subtitle: "দুঃখ", emoji: "😢", color: "#118AB2", type: 'flashcard' },
        { id: 'a50', title: "ঁ", subtitle: "চাঁদ", emoji: "🌙", color: "#4CC9F0", type: 'flashcard' },
    ]
}

    ;

// Colors content
const colorsContent = {
    en: [
        { id: 'c1', title: "Red", subtitle: "Like an apple", emoji: "🔴", color: "#EF476F", type: 'flashcard' },
        { id: 'c2', title: "Blue", subtitle: "Like the sky", emoji: "🔵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'c3', title: "Green", subtitle: "Like grass", emoji: "🟢", color: "#06D6A0", type: 'flashcard' },
        { id: 'c4', title: "Yellow", subtitle: "Like the sun", emoji: "🟡", color: "#FFD166", type: 'flashcard' },
        { id: 'c5', title: "Orange", subtitle: "Like an orange", emoji: "🟠", color: "#FB8500", type: 'flashcard' },
        { id: 'c6', title: "Purple", subtitle: "Like grapes", emoji: "🟣", color: "#7209B7", type: 'flashcard' },
        { id: 'c7', title: "Pink", subtitle: "Like a flower", emoji: "🩷", color: "#F72585", type: 'flashcard' },
        { id: 'c8', title: "Brown", subtitle: "Like chocolate", emoji: "🟤", color: "#8B4513", type: 'flashcard' },
        { id: 'c9', title: "Black", subtitle: "Like night", emoji: "⚫", color: "#073B4C", type: 'flashcard' },
        { id: 'c10', title: "White", subtitle: "Like snow", emoji: "⚪", color: "#FFFFFF", type: 'flashcard' },
        { id: 'c11', title: "Gray", subtitle: "Like a cloud", emoji: "⚫", color: "#808080", type: 'flashcard' },
        { id: 'c12', title: "Rainbow", subtitle: "All colors!", emoji: "🌈", color: "#4CC9F0", type: 'flashcard' },
    ],
    es: [
        { id: 'c1', title: "Rojo", subtitle: "Como una manzana", emoji: "🔴", color: "#EF476F", type: 'flashcard' },
        { id: 'c2', title: "Azul", subtitle: "Como el cielo", emoji: "🔵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'c3', title: "Verde", subtitle: "Como la hierba", emoji: "🟢", color: "#06D6A0", type: 'flashcard' },
        { id: 'c4', title: "Amarillo", subtitle: "Como el sol", emoji: "🟡", color: "#FFD166", type: 'flashcard' },
        { id: 'c5', title: "Naranja", subtitle: "Como una naranja", emoji: "🟠", color: "#FB8500", type: 'flashcard' },
        { id: 'c6', title: "Morado", subtitle: "Como uvas", emoji: "🟣", color: "#7209B7", type: 'flashcard' },
        { id: 'c7', title: "Rosa", subtitle: "Como una flor", emoji: "🩷", color: "#F72585", type: 'flashcard' },
        { id: 'c8', title: "Marrón", subtitle: "Como chocolate", emoji: "🟤", color: "#8B4513", type: 'flashcard' },
        { id: 'c9', title: "Negro", subtitle: "Como la noche", emoji: "⚫", color: "#073B4C", type: 'flashcard' },
        { id: 'c10', title: "Blanco", subtitle: "Como la nieve", emoji: "⚪", color: "#FFFFFF", type: 'flashcard' },
        { id: 'c11', title: "Gris", subtitle: "Como una nube", emoji: "⚫", color: "#808080", type: 'flashcard' },
        { id: 'c12', title: "Arcoíris", subtitle: "¡Todos los colores!", emoji: "🌈", color: "#4CC9F0", type: 'flashcard' },
    ],
    bn: [
        { id: 'c1', title: "লাল", subtitle: "আপেলের মতো", emoji: "🔴", color: "#EF476F", type: 'flashcard' },
        { id: 'c2', title: "নীল", subtitle: "আকাশের মতো", emoji: "🔵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'c3', title: "সবুজ", subtitle: "ঘাসের মতো", emoji: "🟢", color: "#06D6A0", type: 'flashcard' },
        { id: 'c4', title: "হলুদ", subtitle: "সূর্যের মতো", emoji: "🟡", color: "#FFD166", type: 'flashcard' },
        { id: 'c5', title: "কমলা", subtitle: "কমলালেবুর মতো", emoji: "🟠", color: "#FB8500", type: 'flashcard' },
        { id: 'c6', title: "বেগুনি", subtitle: "আঙুরের মতো", emoji: "🟣", color: "#7209B7", type: 'flashcard' },
        { id: 'c7', title: "গোলাপি", subtitle: "ফুলের মতো", emoji: "🩷", color: "#F72585", type: 'flashcard' },
        { id: 'c8', title: "বাদামী", subtitle: "চকলেটের মতো", emoji: "🟤", color: "#8B4513", type: 'flashcard' },
        { id: 'c9', title: "কালো", subtitle: "রাতের মতো", emoji: "⚫", color: "#073B4C", type: 'flashcard' },
        { id: 'c10', title: "সাদা", subtitle: "তুষারের মতো", emoji: "⚪", color: "#FFFFFF", type: 'flashcard' },
        { id: 'c11', title: "ধূসর", subtitle: "মেঘের মতো", emoji: "⚫", color: "#808080", type: 'flashcard' },
        { id: 'c12', title: "রংধনু", subtitle: "সব রং!", emoji: "🌈", color: "#4CC9F0", type: 'flashcard' },
    ]
};

// Shapes content
const shapesContent = {
    en: [
        { id: 'sh1', title: "Circle", subtitle: "Round shape", emoji: "🔵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'sh2', title: "Square", subtitle: "Four equal sides", emoji: "🟦", color: "#7209B7", type: 'flashcard' },
        { id: 'sh3', title: "Triangle", subtitle: "Three sides", emoji: "🔺", color: "#EF476F", type: 'flashcard' },
        { id: 'sh4', title: "Rectangle", subtitle: "Four sides", emoji: "▭", color: "#06D6A0", type: 'flashcard' },
        { id: 'sh5', title: "Oval", subtitle: "Egg shape", emoji: "🥚", color: "#FFD166", type: 'flashcard' },
        { id: 'sh6', title: "Diamond", subtitle: "Shiny shape", emoji: "💎", color: "#4CC9F0", type: 'flashcard' },
        { id: 'sh7', title: "Star", subtitle: "Pointy shape", emoji: "⭐", color: "#FFD166", type: 'flashcard' },
        { id: 'sh8', title: "Heart", subtitle: "Love shape", emoji: "❤️", color: "#EF476F", type: 'flashcard' },
        { id: 'sh9', title: "Pentagon", subtitle: "Five sides", emoji: "⬟", color: "#118AB2", type: 'flashcard' },
        { id: 'sh10', title: "Hexagon", subtitle: "Six sides", emoji: "⬢", color: "#F72585", type: 'flashcard' },
    ],
    es: [
        { id: 'sh1', title: "Círculo", subtitle: "Forma redonda", emoji: "🔵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'sh2', title: "Cuadrado", subtitle: "Cuatro lados iguales", emoji: "🟦", color: "#7209B7", type: 'flashcard' },
        { id: 'sh3', title: "Triángulo", subtitle: "Tres lados", emoji: "🔺", color: "#EF476F", type: 'flashcard' },
        { id: 'sh4', title: "Rectángulo", subtitle: "Cuatro lados", emoji: "▭", color: "#06D6A0", type: 'flashcard' },
        { id: 'sh5', title: "Óvalo", subtitle: "Forma de huevo", emoji: "🥚", color: "#FFD166", type: 'flashcard' },
        { id: 'sh6', title: "Diamante", subtitle: "Forma brillante", emoji: "💎", color: "#4CC9F0", type: 'flashcard' },
        { id: 'sh7', title: "Estrella", subtitle: "Forma puntiaguda", emoji: "⭐", color: "#FFD166", type: 'flashcard' },
        { id: 'sh8', title: "Corazón", subtitle: "Forma de amor", emoji: "❤️", color: "#EF476F", type: 'flashcard' },
        { id: 'sh9', title: "Pentágono", subtitle: "Cinco lados", emoji: "⬟", color: "#118AB2", type: 'flashcard' },
        { id: 'sh10', title: "Hexágono", subtitle: "Seis lados", emoji: "⬢", color: "#F72585", type: 'flashcard' },
    ],
    bn: [
        { id: 'sh1', title: "বৃত্ত", subtitle: "গোল আকার", emoji: "🔵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'sh2', title: "বর্গক্ষেত্র", subtitle: "চার সমান বাহু", emoji: "🟦", color: "#7209B7", type: 'flashcard' },
        { id: 'sh3', title: "ত্রিভুজ", subtitle: "তিন বাহু", emoji: "🔺", color: "#EF476F", type: 'flashcard' },
        { id: 'sh4', title: "আয়তক্ষেত্র", subtitle: "চার বাহু", emoji: "▭", color: "#06D6A0", type: 'flashcard' },
        { id: 'sh5', title: "ডিম্বাকৃতি", subtitle: "ডিমের আকার", emoji: "🥚", color: "#FFD166", type: 'flashcard' },
        { id: 'sh6', title: "হীরক", subtitle: "চকচকে আকার", emoji: "💎", color: "#4CC9F0", type: 'flashcard' },
        { id: 'sh7', title: "তারা", subtitle: "সূচালো আকার", emoji: "⭐", color: "#FFD166", type: 'flashcard' },
        { id: 'sh8', title: "হৃদয়", subtitle: "ভালোবাসার আকার", emoji: "❤️", color: "#EF476F", type: 'flashcard' },
        { id: 'sh9', title: "পঞ্চভুজ", subtitle: "পাঁচ বাহু", emoji: "⬟", color: "#118AB2", type: 'flashcard' },
        { id: 'sh10', title: "ষড়ভুজ", subtitle: "ছয় বাহু", emoji: "⬢", color: "#F72585", type: 'flashcard' },
    ]
};

// Animals content
const animalsContent = {
    en: [
        { id: 'an1', title: "Lion", subtitle: "King of jungle", emoji: "🦁", color: "#FFD166", type: 'flashcard' },
        { id: 'an2', title: "Elephant", subtitle: "Big and strong", emoji: "🐘", color: "#118AB2", type: 'flashcard' },
        { id: 'an3', title: "Tiger", subtitle: "Striped cat", emoji: "🐯", color: "#FFD166", type: 'flashcard' },
        { id: 'an4', title: "Monkey", subtitle: "Loves bananas", emoji: "🐵", color: "#8B4513", type: 'flashcard' },
        { id: 'an5', title: "Giraffe", subtitle: "Long neck", emoji: "🦒", color: "#FFD166", type: 'flashcard' },
        { id: 'an6', title: "Zebra", subtitle: "Black and white", emoji: "🦓", color: "#073B4C", type: 'flashcard' },
        { id: 'an7', title: "Bear", subtitle: "Big and furry", emoji: "🐻", color: "#8B4513", type: 'flashcard' },
        { id: 'an8', title: "Fox", subtitle: "Clever animal", emoji: "🦊", color: "#EF476F", type: 'flashcard' },
        { id: 'an9', title: "Wolf", subtitle: "Howls at moon", emoji: "🐺", color: "#073B4C", type: 'flashcard' },
        { id: 'an10', title: "Rabbit", subtitle: "Hops around", emoji: "🐰", color: "#F72585", type: 'flashcard' },
        { id: 'an11', title: "Cat", subtitle: "Says meow", emoji: "🐱", color: "#FFD166", type: 'flashcard' },
        { id: 'an12', title: "Dog", subtitle: "Best friend", emoji: "🐶", color: "#8B4513", type: 'flashcard' },
        { id: 'an13', title: "Horse", subtitle: "Fast runner", emoji: "🐴", color: "#8B4513", type: 'flashcard' },
        { id: 'an14', title: "Cow", subtitle: "Gives milk", emoji: "🐄", color: "#F72585", type: 'flashcard' },
        { id: 'an15', title: "Sheep", subtitle: "Fluffy wool", emoji: "🐑", color: "#FFFFFF", type: 'flashcard' },
        { id: 'an16', title: "Goat", subtitle: "Climbs hills", emoji: "🐐", color: "#8B4513", type: 'flashcard' },
        { id: 'an17', title: "Chicken", subtitle: "Lays eggs", emoji: "🐔", color: "#FFD166", type: 'flashcard' },
        { id: 'an18', title: "Duck", subtitle: "Swims in pond", emoji: "🦆", color: "#FFD166", type: 'flashcard' },
        { id: 'an19', title: "Fish", subtitle: "Lives in water", emoji: "🐠", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an20', title: "Dolphin", subtitle: "Smart swimmer", emoji: "🐬", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an21', title: "Whale", subtitle: "Biggest animal", emoji: "🐋", color: "#118AB2", type: 'flashcard' },
        { id: 'an22', title: "Shark", subtitle: "Ocean hunter", emoji: "🦈", color: "#073B4C", type: 'flashcard' },
        { id: 'an23', title: "Butterfly", subtitle: "Beautiful wings", emoji: "🦋", color: "#F72585", type: 'flashcard' },
        { id: 'an24', title: "Bee", subtitle: "Makes honey", emoji: "🐝", color: "#FFD166", type: 'flashcard' },
        { id: 'an25', title: "Ant", subtitle: "Hard worker", emoji: "🐜", color: "#073B4C", type: 'flashcard' },
        { id: 'an26', title: "Bird", subtitle: "Flies high", emoji: "🐦", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an27', title: "Eagle", subtitle: "Strong flyer", emoji: "🦅", color: "#8B4513", type: 'flashcard' },
        { id: 'an28', title: "Owl", subtitle: "Wise bird", emoji: "🦉", color: "#8B4513", type: 'flashcard' },
        { id: 'an29', title: "Frog", subtitle: "Jumps and croaks", emoji: "🐸", color: "#06D6A0", type: 'flashcard' },
        { id: 'an30', title: "Snake", subtitle: "Slithers around", emoji: "🐍", color: "#06D6A0", type: 'flashcard' },
    ],
    es: [
        { id: 'an1', title: "León", subtitle: "Rey de la selva", emoji: "🦁", color: "#FFD166", type: 'flashcard' },
        { id: 'an2', title: "Elefante", subtitle: "Grande y fuerte", emoji: "🐘", color: "#118AB2", type: 'flashcard' },
        { id: 'an3', title: "Tigre", subtitle: "Gato rayado", emoji: "🐯", color: "#FFD166", type: 'flashcard' },
        { id: 'an4', title: "Mono", subtitle: "Ama los plátanos", emoji: "🐵", color: "#8B4513", type: 'flashcard' },
        { id: 'an5', title: "Jirafa", subtitle: "Cuello largo", emoji: "🦒", color: "#FFD166", type: 'flashcard' },
        { id: 'an6', title: "Cebra", subtitle: "Blanco y negro", emoji: "🦓", color: "#073B4C", type: 'flashcard' },
        { id: 'an7', title: "Oso", subtitle: "Grande y peludo", emoji: "🐻", color: "#8B4513", type: 'flashcard' },
        { id: 'an8', title: "Zorro", subtitle: "Animal inteligente", emoji: "🦊", color: "#EF476F", type: 'flashcard' },
        { id: 'an9', title: "Lobo", subtitle: "Aúlla a la luna", emoji: "🐺", color: "#073B4C", type: 'flashcard' },
        { id: 'an10', title: "Conejo", subtitle: "Salta alrededor", emoji: "🐰", color: "#F72585", type: 'flashcard' },
        { id: 'an11', title: "Gato", subtitle: "Dice miau", emoji: "🐱", color: "#FFD166", type: 'flashcard' },
        { id: 'an12', title: "Perro", subtitle: "Mejor amigo", emoji: "🐶", color: "#8B4513", type: 'flashcard' },
        { id: 'an13', title: "Caballo", subtitle: "Corredor rápido", emoji: "🐴", color: "#8B4513", type: 'flashcard' },
        { id: 'an14', title: "Vaca", subtitle: "Da leche", emoji: "🐄", color: "#F72585", type: 'flashcard' },
        { id: 'an15', title: "Oveja", subtitle: "Lana esponjosa", emoji: "🐑", color: "#FFFFFF", type: 'flashcard' },
        { id: 'an16', title: "Cabra", subtitle: "Sube colinas", emoji: "🐐", color: "#8B4513", type: 'flashcard' },
        { id: 'an17', title: "Gallina", subtitle: "Pone huevos", emoji: "🐔", color: "#FFD166", type: 'flashcard' },
        { id: 'an18', title: "Pato", subtitle: "Nada en el estanque", emoji: "🦆", color: "#FFD166", type: 'flashcard' },
        { id: 'an19', title: "Pez", subtitle: "Vive en agua", emoji: "🐠", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an20', title: "Delfín", subtitle: "Nadador inteligente", emoji: "🐬", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an21', title: "Ballena", subtitle: "Animal más grande", emoji: "🐋", color: "#118AB2", type: 'flashcard' },
        { id: 'an22', title: "Tiburón", subtitle: "Cazador del océano", emoji: "🦈", color: "#073B4C", type: 'flashcard' },
        { id: 'an23', title: "Mariposa", subtitle: "Alas hermosas", emoji: "🦋", color: "#F72585", type: 'flashcard' },
        { id: 'an24', title: "Abeja", subtitle: "Hace miel", emoji: "🐝", color: "#FFD166", type: 'flashcard' },
        { id: 'an25', title: "Hormiga", subtitle: "Trabajador duro", emoji: "🐜", color: "#073B4C", type: 'flashcard' },
        { id: 'an26', title: "Pájaro", subtitle: "Vuela alto", emoji: "🐦", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an27', title: "Águila", subtitle: "Volador fuerte", emoji: "🦅", color: "#8B4513", type: 'flashcard' },
        { id: 'an28', title: "Búho", subtitle: "Pájaro sabio", emoji: "🦉", color: "#8B4513", type: 'flashcard' },
        { id: 'an29', title: "Rana", subtitle: "Salta y croa", emoji: "🐸", color: "#06D6A0", type: 'flashcard' },
        { id: 'an30', title: "Serpiente", subtitle: "Se desliza", emoji: "🐍", color: "#06D6A0", type: 'flashcard' },
    ],
    bn: [
        { id: 'an1', title: "সিংহ", subtitle: "জঙ্গলের রাজা", emoji: "🦁", color: "#FFD166", type: 'flashcard' },
        { id: 'an2', title: "হাতি", subtitle: "বড় এবং শক্তিশালী", emoji: "🐘", color: "#118AB2", type: 'flashcard' },
        { id: 'an3', title: "বাঘ", subtitle: "ডোরাকাটা বিড়াল", emoji: "🐯", color: "#FFD166", type: 'flashcard' },
        { id: 'an4', title: "বানর", subtitle: "কলা ভালোবাসে", emoji: "🐵", color: "#8B4513", type: 'flashcard' },
        { id: 'an5', title: "জিরাফ", subtitle: "লম্বা গলা", emoji: "🦒", color: "#FFD166", type: 'flashcard' },
        { id: 'an6', title: "জেব্রা", subtitle: "কালো এবং সাদা", emoji: "🦓", color: "#073B4C", type: 'flashcard' },
        { id: 'an7', title: "ভালুক", subtitle: "বড় এবং লোমযুক্ত", emoji: "🐻", color: "#8B4513", type: 'flashcard' },
        { id: 'an8', title: "শেয়াল", subtitle: "চালাক প্রাণী", emoji: "🦊", color: "#EF476F", type: 'flashcard' },
        { id: 'an9', title: "নেকড়ে", subtitle: "চাঁদে চিৎকার করে", emoji: "🐺", color: "#073B4C", type: 'flashcard' },
        { id: 'an10', title: "খরগোশ", subtitle: "লাফিয়ে বেড়ায়", emoji: "🐰", color: "#F72585", type: 'flashcard' },
        { id: 'an11', title: "বিড়াল", subtitle: "মিউ বলে", emoji: "🐱", color: "#FFD166", type: 'flashcard' },
        { id: 'an12', title: "কুকুর", subtitle: "সেরা বন্ধু", emoji: "🐶", color: "#8B4513", type: 'flashcard' },
        { id: 'an13', title: "ঘোড়া", subtitle: "দ্রুত দৌড়ায়", emoji: "🐴", color: "#8B4513", type: 'flashcard' },
        { id: 'an14', title: "গরু", subtitle: "দুধ দেয়", emoji: "🐄", color: "#F72585", type: 'flashcard' },
        { id: 'an15', title: "ভেড়া", subtitle: "তুলতুলে পশম", emoji: "🐑", color: "#FFFFFF", type: 'flashcard' },
        { id: 'an16', title: "ছাগল", subtitle: "পাহাড়ে চড়ে", emoji: "🐐", color: "#8B4513", type: 'flashcard' },
        { id: 'an17', title: "মুরগি", subtitle: "ডিম পাড়ে", emoji: "🐔", color: "#FFD166", type: 'flashcard' },
        { id: 'an18', title: "হাঁস", subtitle: "পুকুরে সাঁতার কাটে", emoji: "🦆", color: "#FFD166", type: 'flashcard' },
        { id: 'an19', title: "মাছ", subtitle: "পানিতে বাস করে", emoji: "🐠", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an20', title: "ডলফিন", subtitle: "স্মার্ট সাঁতারু", emoji: "🐬", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an21', title: "তিমি", subtitle: "সবচেয়ে বড় প্রাণী", emoji: "🐋", color: "#118AB2", type: 'flashcard' },
        { id: 'an22', title: "হাঙর", subtitle: "সমুদ্রের শিকারী", emoji: "🦈", color: "#073B4C", type: 'flashcard' },
        { id: 'an23', title: "প্রজাপতি", subtitle: "সুন্দর ডানা", emoji: "🦋", color: "#F72585", type: 'flashcard' },
        { id: 'an24', title: "মৌমাছি", subtitle: "মধু তৈরি করে", emoji: "🐝", color: "#FFD166", type: 'flashcard' },
        { id: 'an25', title: "পিঁপড়া", subtitle: "কঠোর পরিশ্রমী", emoji: "🐜", color: "#073B4C", type: 'flashcard' },
        { id: 'an26', title: "পাখি", subtitle: "উঁচুতে উড়ে", emoji: "🐦", color: "#4CC9F0", type: 'flashcard' },
        { id: 'an27', title: "ঈগল", subtitle: "শক্তিশালী উড়নশীল", emoji: "🦅", color: "#8B4513", type: 'flashcard' },
        { id: 'an28', title: "পেঁচা", subtitle: "জ্ঞানী পাখি", emoji: "🦉", color: "#8B4513", type: 'flashcard' },
        { id: 'an29', title: "ব্যাঙ", subtitle: "লাফায় এবং ডাকে", emoji: "🐸", color: "#06D6A0", type: 'flashcard' },
        { id: 'an30', title: "সাপ", subtitle: "হেঁটে বেড়ায়", emoji: "🐍", color: "#06D6A0", type: 'flashcard' },
    ]
};

// Fruits content
const fruitsContent = {
    en: [
        { id: 'fr1', title: "Apple", subtitle: "Red and crunchy", emoji: "🍎", color: "#EF476F", type: 'flashcard' },
        { id: 'fr2', title: "Banana", subtitle: "Yellow and sweet", emoji: "🍌", color: "#FFD166", type: 'flashcard' },
        { id: 'fr3', title: "Orange", subtitle: "Juicy citrus", emoji: "🍊", color: "#FB8500", type: 'flashcard' },
        { id: 'fr4', title: "Grapes", subtitle: "Purple berries", emoji: "🍇", color: "#7209B7", type: 'flashcard' },
        { id: 'fr5', title: "Mango", subtitle: "Tropical delight", emoji: "🥭", color: "#FFD166", type: 'flashcard' },
        { id: 'fr6', title: "Watermelon", subtitle: "Summer fruit", emoji: "🍉", color: "#EF476F", type: 'flashcard' },
        { id: 'fr7', title: "Strawberry", subtitle: "Sweet berry", emoji: "🍓", color: "#EF476F", type: 'flashcard' },
        { id: 'fr8', title: "Pineapple", subtitle: "Spiky fruit", emoji: "🍍", color: "#FFD166", type: 'flashcard' },
        { id: 'fr9', title: "Kiwi", subtitle: "Green inside", emoji: "🥝", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr10', title: "Peach", subtitle: "Fuzzy fruit", emoji: "🍑", color: "#F72585", type: 'flashcard' },
        { id: 'fr11', title: "Pear", subtitle: "Green or yellow", emoji: "🍐", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr12', title: "Cherry", subtitle: "Small and red", emoji: "🍒", color: "#EF476F", type: 'flashcard' },
        { id: 'fr13', title: "Lemon", subtitle: "Sour citrus", emoji: "🍋", color: "#FFD166", type: 'flashcard' },
        { id: 'fr14', title: "Coconut", subtitle: "Tropical nut", emoji: "🥥", color: "#8B4513", type: 'flashcard' },
        { id: 'fr15', title: "Papaya", subtitle: "Orange flesh", emoji: "🍈", color: "#FB8500", type: 'flashcard' },
        { id: 'fr16', title: "Pomegranate", subtitle: "Red seeds", emoji: "🍒", color: "#EF476F", type: 'flashcard' },
        { id: 'fr17', title: "Blueberry", subtitle: "Tiny blue fruit", emoji: "🫐", color: "#4CC9F0", type: 'flashcard' },
        { id: 'fr18', title: "Raspberry", subtitle: "Red berry", emoji: "🍓", color: "#EF476F", type: 'flashcard' },
        { id: 'fr19', title: "Avocado", subtitle: "Green and creamy", emoji: "🥑", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr20', title: "Dragon Fruit", subtitle: "Exotic fruit", emoji: "🐉", color: "#F72585", type: 'flashcard' },
    ],
    es: [
        { id: 'fr1', title: "Manzana", subtitle: "Roja y crujiente", emoji: "🍎", color: "#EF476F", type: 'flashcard' },
        { id: 'fr2', title: "Plátano", subtitle: "Amarillo y dulce", emoji: "🍌", color: "#FFD166", type: 'flashcard' },
        { id: 'fr3', title: "Naranja", subtitle: "Cítrico jugoso", emoji: "🍊", color: "#FB8500", type: 'flashcard' },
        { id: 'fr4', title: "Uvas", subtitle: "Bayas moradas", emoji: "🍇", color: "#7209B7", type: 'flashcard' },
        { id: 'fr5', title: "Mango", subtitle: "Delicia tropical", emoji: "🥭", color: "#FFD166", type: 'flashcard' },
        { id: 'fr6', title: "Sandía", subtitle: "Fruta de verano", emoji: "🍉", color: "#EF476F", type: 'flashcard' },
        { id: 'fr7', title: "Fresa", subtitle: "Baya dulce", emoji: "🍓", color: "#EF476F", type: 'flashcard' },
        { id: 'fr8', title: "Piña", subtitle: "Fruta espinosa", emoji: "🍍", color: "#FFD166", type: 'flashcard' },
        { id: 'fr9', title: "Kiwi", subtitle: "Verde por dentro", emoji: "🥝", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr10', title: "Durazno", subtitle: "Fruta peluda", emoji: "🍑", color: "#F72585", type: 'flashcard' },
        { id: 'fr11', title: "Pera", subtitle: "Verde o amarilla", emoji: "🍐", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr12', title: "Cereza", subtitle: "Pequeña y roja", emoji: "🍒", color: "#EF476F", type: 'flashcard' },
        { id: 'fr13', title: "Limón", subtitle: "Cítrico agrio", emoji: "🍋", color: "#FFD166", type: 'flashcard' },
        { id: 'fr14', title: "Coco", subtitle: "Nuez tropical", emoji: "🥥", color: "#8B4513", type: 'flashcard' },
        { id: 'fr15', title: "Papaya", subtitle: "Carne naranja", emoji: "🍈", color: "#FB8500", type: 'flashcard' },
        { id: 'fr16', title: "Granada", subtitle: "Semillas rojas", emoji: "🍒", color: "#EF476F", type: 'flashcard' },
        { id: 'fr17', title: "Arándano", subtitle: "Fruta azul pequeña", emoji: "🫐", color: "#4CC9F0", type: 'flashcard' },
        { id: 'fr18', title: "Frambuesa", subtitle: "Baya roja", emoji: "🍓", color: "#EF476F", type: 'flashcard' },
        { id: 'fr19', title: "Aguacate", subtitle: "Verde y cremoso", emoji: "🥑", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr20', title: "Fruta del Dragón", subtitle: "Fruta exótica", emoji: "🐉", color: "#F72585", type: 'flashcard' },
    ],
    bn: [
        { id: 'fr1', title: "আপেল", subtitle: "লাল এবং খসখসে", emoji: "🍎", color: "#EF476F", type: 'flashcard' },
        { id: 'fr2', title: "কলা", subtitle: "হলুদ এবং মিষ্টি", emoji: "🍌", color: "#FFD166", type: 'flashcard' },
        { id: 'fr3', title: "কমলা", subtitle: "রসালো সাইট্রাস", emoji: "🍊", color: "#FB8500", type: 'flashcard' },
        { id: 'fr4', title: "আঙুর", subtitle: "বেগুনি বেরি", emoji: "🍇", color: "#7209B7", type: 'flashcard' },
        { id: 'fr5', title: "আম", subtitle: "গ্রীষ্মমণ্ডলীয় আনন্দ", emoji: "🥭", color: "#FFD166", type: 'flashcard' },
        { id: 'fr6', title: "তরমুজ", subtitle: "গ্রীষ্মের ফল", emoji: "🍉", color: "#EF476F", type: 'flashcard' },
        { id: 'fr7', title: "স্ট্রবেরি", subtitle: "মিষ্টি বেরি", emoji: "🍓", color: "#EF476F", type: 'flashcard' },
        { id: 'fr8', title: "আনারস", subtitle: "কাঁটাযুক্ত ফল", emoji: "🍍", color: "#FFD166", type: 'flashcard' },
        { id: 'fr9', title: "কিউই", subtitle: "ভিতরে সবুজ", emoji: "🥝", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr10', title: "পীচ", subtitle: "তুলতুলে ফল", emoji: "🍑", color: "#F72585", type: 'flashcard' },
        { id: 'fr11', title: "নাশপাতি", subtitle: "সবুজ বা হলুদ", emoji: "🍐", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr12', title: "চেরি", subtitle: "ছোট এবং লাল", emoji: "🍒", color: "#EF476F", type: 'flashcard' },
        { id: 'fr13', title: "লেবু", subtitle: "টক সাইট্রাস", emoji: "🍋", color: "#FFD166", type: 'flashcard' },
        { id: 'fr14', title: "নারকেল", subtitle: "গ্রীষ্মমণ্ডলীয় বাদাম", emoji: "🥥", color: "#8B4513", type: 'flashcard' },
        { id: 'fr15', title: "পেঁপে", subtitle: "কমলা শাঁস", emoji: "🍈", color: "#FB8500", type: 'flashcard' },
        { id: 'fr16', title: "ডালিম", subtitle: "লাল বীজ", emoji: "🍒", color: "#EF476F", type: 'flashcard' },
        { id: 'fr17', title: "ব্লুবেরি", subtitle: "ছোট নীল ফল", emoji: "🫐", color: "#4CC9F0", type: 'flashcard' },
        { id: 'fr18', title: "রাস্পবেরি", subtitle: "লাল বেরি", emoji: "🍓", color: "#EF476F", type: 'flashcard' },
        { id: 'fr19', title: "আভাকাডো", subtitle: "সবুজ এবং ক্রিমি", emoji: "🥑", color: "#06D6A0", type: 'flashcard' },
        { id: 'fr20', title: "ড্রাগন ফল", subtitle: "বিদেশী ফল", emoji: "🐉", color: "#F72585", type: 'flashcard' },
    ]
};

// Vegetables content
const vegetablesContent = {
    en: [
        { id: 'vg1', title: "Carrot", subtitle: "Orange root", emoji: "🥕", color: "#FB8500", type: 'flashcard' },
        { id: 'vg2', title: "Tomato", subtitle: "Red and juicy", emoji: "🍅", color: "#EF476F", type: 'flashcard' },
        { id: 'vg3', title: "Potato", subtitle: "Underground veggie", emoji: "🥔", color: "#8B4513", type: 'flashcard' },
        { id: 'vg4', title: "Onion", subtitle: "Makes you cry", emoji: "🧅", color: "#FFD166", type: 'flashcard' },
        { id: 'vg5', title: "Broccoli", subtitle: "Little trees", emoji: "🥦", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg6', title: "Cucumber", subtitle: "Green and cool", emoji: "🥒", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg7', title: "Pepper", subtitle: "Bell shaped", emoji: "🫑", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg8', title: "Corn", subtitle: "Yellow kernels", emoji: "🌽", color: "#FFD166", type: 'flashcard' },
        { id: 'vg9', title: "Pumpkin", subtitle: "Big and orange", emoji: "🎃", color: "#FB8500", type: 'flashcard' },
        { id: 'vg10', title: "Eggplant", subtitle: "Purple veggie", emoji: "🍆", color: "#7209B7", type: 'flashcard' },
        { id: 'vg11', title: "Cabbage", subtitle: "Leafy green", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg12', title: "Cauliflower", subtitle: "White florets", emoji: "🥦", color: "#FFFFFF", type: 'flashcard' },
        { id: 'vg13', title: "Spinach", subtitle: "Iron rich", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg14', title: "Lettuce", subtitle: "Salad base", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg15', title: "Radish", subtitle: "Pink root", emoji: "🌶️", color: "#F72585", type: 'flashcard' },
        { id: 'vg16', title: "Beetroot", subtitle: "Deep red", emoji: "🥕", color: "#EF476F", type: 'flashcard' },
        { id: 'vg17', title: "Mushroom", subtitle: "Umbrella shaped", emoji: "🍄", color: "#8B4513", type: 'flashcard' },
        { id: 'vg18', title: "Peas", subtitle: "Green balls", emoji: "🟢", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg19', title: "Beans", subtitle: "Green pods", emoji: "🫘", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg20', title: "Garlic", subtitle: "Strong smell", emoji: "🧄", color: "#FFFFFF", type: 'flashcard' },
    ],
    es: [
        { id: 'vg1', title: "Zanahoria", subtitle: "Raíz naranja", emoji: "🥕", color: "#FB8500", type: 'flashcard' },
        { id: 'vg2', title: "Tomate", subtitle: "Rojo y jugoso", emoji: "🍅", color: "#EF476F", type: 'flashcard' },
        { id: 'vg3', title: "Papa", subtitle: "Vegetal subterráneo", emoji: "🥔", color: "#8B4513", type: 'flashcard' },
        { id: 'vg4', title: "Cebolla", subtitle: "Te hace llorar", emoji: "🧅", color: "#FFD166", type: 'flashcard' },
        { id: 'vg5', title: "Brócoli", subtitle: "Arbolitos", emoji: "🥦", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg6', title: "Pepino", subtitle: "Verde y fresco", emoji: "🥒", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg7', title: "Pimiento", subtitle: "Forma de campana", emoji: "🫑", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg8', title: "Maíz", subtitle: "Granos amarillos", emoji: "🌽", color: "#FFD166", type: 'flashcard' },
        { id: 'vg9', title: "Calabaza", subtitle: "Grande y naranja", emoji: "🎃", color: "#FB8500", type: 'flashcard' },
        { id: 'vg10', title: "Berenjena", subtitle: "Vegetal morado", emoji: "🍆", color: "#7209B7", type: 'flashcard' },
        { id: 'vg11', title: "Repollo", subtitle: "Verde frondoso", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg12', title: "Coliflor", subtitle: "Floretes blancos", emoji: "🥦", color: "#FFFFFF", type: 'flashcard' },
        { id: 'vg13', title: "Espinaca", subtitle: "Rica en hierro", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg14', title: "Lechuga", subtitle: "Base de ensalada", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg15', title: "Rábano", subtitle: "Raíz rosa", emoji: "🌶️", color: "#F72585", type: 'flashcard' },
        { id: 'vg16', title: "Remolacha", subtitle: "Rojo profundo", emoji: "🥕", color: "#EF476F", type: 'flashcard' },
        { id: 'vg17', title: "Champiñón", subtitle: "Forma de paraguas", emoji: "🍄", color: "#8B4513", type: 'flashcard' },
        { id: 'vg18', title: "Guisantes", subtitle: "Bolas verdes", emoji: "🟢", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg19', title: "Judías", subtitle: "Vainas verdes", emoji: "🫘", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg20', title: "Ajo", subtitle: "Olor fuerte", emoji: "🧄", color: "#FFFFFF", type: 'flashcard' },
    ],
    bn: [
        { id: 'vg1', title: "গাজর", subtitle: "কমলা মূল", emoji: "🥕", color: "#FB8500", type: 'flashcard' },
        { id: 'vg2', title: "টমেটো", subtitle: "লাল এবং রসালো", emoji: "🍅", color: "#EF476F", type: 'flashcard' },
        { id: 'vg3', title: "আলু", subtitle: "ভূগর্ভস্থ সবজি", emoji: "🥔", color: "#8B4513", type: 'flashcard' },
        { id: 'vg4', title: "পেঁয়াজ", subtitle: "কাঁদায়", emoji: "🧅", color: "#FFD166", type: 'flashcard' },
        { id: 'vg5', title: "ব্রোকলি", subtitle: "ছোট গাছ", emoji: "🥦", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg6', title: "শসা", subtitle: "সবুজ এবং ঠান্ডা", emoji: "🥒", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg7', title: "মরিচ", subtitle: "ঘণ্টা আকৃতির", emoji: "🫑", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg8', title: "ভুট্টা", subtitle: "হলুদ দানা", emoji: "🌽", color: "#FFD166", type: 'flashcard' },
        { id: 'vg9', title: "কুমড়া", subtitle: "বড় এবং কমলা", emoji: "🎃", color: "#FB8500", type: 'flashcard' },
        { id: 'vg10', title: "বেগুন", subtitle: "বেগুনি সবজি", emoji: "🍆", color: "#7209B7", type: 'flashcard' },
        { id: 'vg11', title: "বাঁধাকপি", subtitle: "পাতাযুক্ত সবুজ", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg12', title: "ফুলকপি", subtitle: "সাদা ফুল", emoji: "🥦", color: "#FFFFFF", type: 'flashcard' },
        { id: 'vg13', title: "পালং শাক", subtitle: "আয়রন সমৃদ্ধ", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg14', title: "লেটুস", subtitle: "সালাদ বেস", emoji: "🥬", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg15', title: "মূলা", subtitle: "গোলাপি মূল", emoji: "🌶️", color: "#F72585", type: 'flashcard' },
        { id: 'vg16', title: "বিটরুট", subtitle: "গাঢ় লাল", emoji: "🥕", color: "#EF476F", type: 'flashcard' },
        { id: 'vg17', title: "মাশরুম", subtitle: "ছাতা আকৃতির", emoji: "🍄", color: "#8B4513", type: 'flashcard' },
        { id: 'vg18', title: "মটরশুঁটি", subtitle: "সবুজ বল", emoji: "🟢", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg19', title: "সিম", subtitle: "সবুজ শুঁটি", emoji: "🫘", color: "#06D6A0", type: 'flashcard' },
        { id: 'vg20', title: "রসুন", subtitle: "তীব্র গন্ধ", emoji: "🧄", color: "#FFFFFF", type: 'flashcard' },
    ]
};

// Build final content data
export const contentData = {
    en: {
        stories: [...storyContent.en, ...generateMultiplicationTables('en')],
        alphabets: alphabetContent.en,
        maths: generateNumbers('en'),
        colors: colorsContent.en,
        shapes: shapesContent.en,
        animals: animalsContent.en,
        fruits: fruitsContent.en,
        vegetables: vegetablesContent.en,
        bodyparts: bodyPartsContent.en,
        days: daysContent.en,
        months: monthsContent.en,
        weather: weatherContent.en,
        verbs: verbsContent.en,
        professions: professionsContent.en,
    },
    es: {
        stories: [...storyContent.es, ...generateMultiplicationTables('es')],
        alphabets: alphabetContent.es,
        maths: generateNumbers('es'),
        colors: colorsContent.es,
        shapes: shapesContent.es,
        animals: animalsContent.es,
        fruits: fruitsContent.es,
        vegetables: vegetablesContent.es,
        bodyparts: bodyPartsContent.es,
        days: daysContent.es,
        months: monthsContent.es,
        weather: weatherContent.es,
        verbs: verbsContent.es,
        professions: professionsContent.es,
    },
    bn: {
        stories: [...storyContent.bn, ...generateMultiplicationTables('bn')],
        alphabets: alphabetContent.bn,
        maths: generateNumbers('bn'),
        colors: colorsContent.bn,
        shapes: shapesContent.bn,
        animals: animalsContent.bn,
        fruits: fruitsContent.bn,
        vegetables: vegetablesContent.bn,
        bodyparts: bodyPartsContent.bn,
        days: daysContent.bn,
        months: monthsContent.bn,
        weather: weatherContent.bn,
        verbs: verbsContent.bn,
        professions: professionsContent.bn,
    }
};
