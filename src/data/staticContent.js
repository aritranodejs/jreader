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
        { id: 'a1', title: "অ", subtitle: "অজগর", emoji: "🐍", color: "#EF476F", type: 'flashcard' },
        { id: 'a2', title: "আ", subtitle: "আম", emoji: "🥭", color: "#FFD166", type: 'flashcard' },
        { id: 'a3', title: "ই", subtitle: "ইঁদুর", emoji: "🐭", color: "#06D6A0", type: 'flashcard' },
        { id: 'a4', title: "ঈ", subtitle: "ঈগল", emoji: "🦅", color: "#118AB2", type: 'flashcard' },
        { id: 'a5', title: "উ", subtitle: "উট", emoji: "🐪", color: "#073B4C", type: 'flashcard' },
        { id: 'a6', title: "ঊ", subtitle: "ঊর্ধ্ব", emoji: "⬆️", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a7', title: "এ", subtitle: "একতারা", emoji: "🎸", color: "#7209B7", type: 'flashcard' },
        { id: 'a8', title: "ঐ", subtitle: "ঐরাবত", emoji: "🐘", color: "#F72585", type: 'flashcard' },
        { id: 'a9', title: "ও", subtitle: "ওল", emoji: "🥔", color: "#06D6A0", type: 'flashcard' },
        { id: 'a10', title: "ঔ", subtitle: "ঔষধ", emoji: "💊", color: "#EF476F", type: 'flashcard' },
        { id: 'a11', title: "ক", subtitle: "কলা", emoji: "🍌", color: "#FFD166", type: 'flashcard' },
        { id: 'a12', title: "খ", subtitle: "খরগোশ", emoji: "🐰", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a13', title: "গ", subtitle: "গাছ", emoji: "🌳", color: "#06D6A0", type: 'flashcard' },
        { id: 'a14', title: "ঘ", subtitle: "ঘর", emoji: "🏠", color: "#7209B7", type: 'flashcard' },
        { id: 'a15', title: "চ", subtitle: "চাঁদ", emoji: "🌙", color: "#118AB2", type: 'flashcard' },
        { id: 'a16', title: "ছ", subtitle: "ছাতা", emoji: "☂️", color: "#EF476F", type: 'flashcard' },
        { id: 'a17', title: "জ", subtitle: "জাহাজ", emoji: "⛵", color: "#4CC9F0", type: 'flashcard' },
        { id: 'a18', title: "ঝ", subtitle: "ঝরনা", emoji: "🌊", color: "#06D6A0", type: 'flashcard' },
        { id: 'a19', title: "ট", subtitle: "টমেটো", emoji: "🍅", color: "#EF476F", type: 'flashcard' },
        { id: 'a20', title: "ঠ", subtitle: "ঠোঁট", emoji: "👄", color: "#F72585", type: 'flashcard' },
    ]
};

// Build final content data
export const contentData = {
    en: {
        stories: [...storyContent.en, ...generateMultiplicationTables('en')],
        alphabets: alphabetContent.en,
        maths: generateNumbers('en')
    },
    es: {
        stories: [...storyContent.es, ...generateMultiplicationTables('es')],
        alphabets: alphabetContent.es,
        maths: generateNumbers('es')
    },
    bn: {
        stories: [...storyContent.bn, ...generateMultiplicationTables('bn')],
        alphabets: alphabetContent.bn,
        maths: generateNumbers('bn')
    }
};
