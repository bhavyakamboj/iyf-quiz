import { NUMBER_OF_QUESTIONS } from "../constants";

var allQuestions = [{
    "title": "Great hero from Mahabharata who lived life in such a way today He is another name for generosity and loyalty",
    "options": ["Bhishma","Drona","Kripacharya","Karna"],
    "answer": 4
    },
    {
        "title": "Arjuna took a vow to kill this person by next day’s sun set",
        "options": ["Ashvatthama","Jayadratha","Bhishma","Shalya"],
        "answer": 2
    },
    {
        "title": "Along with Krishna and Arjuna who was the extra passenger on Arjuna's chariot during the war",
        "options": ["Durga","Surya","Hanuman","Vayu"],
        "answer": 3
    },
    {
        "title": "Who was the father of Bhishma Pitamah",
        "options": ["Shantanu","Ved Vyas","Brahma","Chandra"],
        "answer": 1
    },
    {
        "title": "Running commentary of Mahabharata war was given to Dhritrashtra by",
        "options": ["Vidur","Ved vyas","Brahma","Sanjay"],
        "answer": 4
    },
    {
        "title": "Who vowed to kill the evil Dushasana and drink his blood when he molested Draupadi",
        "options": ["Ghatotkacha","Bhishma","Bheema","Arjuna"],
        "answer": 3
    },
    {
        "title": "On the advice of _______, Ravan agreed to spare Hanuman and set him free after setting alight his tail",
        "options": ["Jambavant","Vibhishana","Mandodari","Indrajit"],
        "answer": 2
    },
    {
        "title": "Who was Bali's son?",
        "options": ["Nal","Neel","Angad","Hanuman"],
        "answer": 3
    },
    {
        "title": "Who put up a brave fight to protect Sita when Ravana was carrying her away to Lanka forcefully from Pushpak Viman?",
        "options": ["Jatayu","Hanuman","Vibhishana","Mareech"],
        "answer": 1
    },
    {
        "title": "What is the name of Ravana's main queen",
        "options": ["Kekasi","Rati","Mandodari","Padma"],
        "answer": 3
    },
    {
        "title": "Ayodhya is situated on the banks of river_______",
        "options": ["Godavari","Sarayu","Ganga","Yamuna"],
        "answer": 2
    },
    {
        "title": "Who killed Indrajit",
        "options": ["Lord Ram","Hanuman","Indra","Lakshman"],
        "answer": 4
    },
    {
        "title": "Who is the brother of Srimati Radharani",
        "options": ["Sridaam","Subala","Sudama","None"],
        "answer": 1
    },
    {
        "title": "What are total number of slokas in Bhagavad Gita",
        "options": ["7000","700","70","70000"],
        "answer": 2
    },
    {
        "title": "Which is not a mode of nature",
        "options": ["Goodness","Eternity","Passion","Ignorance"],
        "answer": 2
    },
    {
        "title": "Subtle body is not made up of ",
        "options": ["Earth","Mind","Intelligence","False ego"],
        "answer": 1
    },
    {
        "title": "How many different stages are there in Dhyan Yoga",
        "options": ["16","8","4","32"],
        "answer": 2
    },
    {
        "title": "What's the name of Arjuna's bow?",
        "options": ["Gandiva","Vajra","Barchi","Trishool"],
        "answer": 1
    },
    {
        "title": "The only Kaurava son who protested disrobing of Draupadi?",
        "options": ["Duryodhana","Dushasana","Vikarna","Dhritarashtra"],
        "answer": 3
    },
    {
        "title": "What is name of monthly magazine of ISKCON or Hare Krishna movement",
        "options": ["India Today","Back to Godhead","Life","Nature"],
        "answer": 2
    },
    {
        "title": "When was ISKCON established?",
        "options": ["1986","1996","1956","1966"],
        "answer": 4
    },
    {
        "title": "Where is world head quarter of ISKCON?",
        "options": ["Mumbai","Delhi","Mayapur","Vrindavan"],
        "answer": 3
    },
    {
        "title": "Who was the son of Bheema and Hidimba?",
        "options": ["Ashvatthama","Ghatotakachh","Jayadratha","Barbareek"],
        "answer": 2
    },
    {
        "title": "What's the size of soul relative to tip of hair?",
        "options": ["1/100","1/1000","1/10000","1/100"],
        "answer": 3
    },
    {
        "title": "How many planetary systems are in this universe?",
        "options": ["14","1400","140","14000"],
        "answer": 1
    },
    {
        "title": "Gross human body is NOT made up of what ingredient?",
        "options": ["Earth","Water","Intelligence","Ether"],
        "answer": 3
    },
    {
        "title": "What does word Krishna mean?",
        "options": ["Golden","All attractive","Cowherd boy","White"],
        "answer": 2
    },
    {
        "title": "Who is the only incarnation of Lord Vishnu as a female?",
        "options": ["Mohini","Durga","Kali","None"],
        "answer": 1
    },
    {
        "title": "Which is part of the four regulative principles?",
        "options": ["No alcohol","No facebook","No whatsapp","No twitter"],
        "answer": 1
    },
    {
        "title": "For how many days the battle of Kurukshetra was fought?",
        "options": ["2","15","31","18"],
        "answer": 4
    },
    {
        "title": "Whom does Mridanga represent",
        "options": ["Krishna","Hanuman","Balaram","Jagannath"],
        "answer": 3
    },
    {
        "title": "Who is the controller of mode of ignorance in this material world?",
        "options": ["Lord Vishnu","Lord Brahma","Goddess Durga","Lord Shiva"],
        "answer": 4
    },
    {
        "title": "Who is the king of demigods?",
        "options": ["Surya","Indra","Vayu","Varuna"],
        "answer": 2
    },
    {
        "title": "Which one is not one of three kinds of miseries or Kleshas in the material world?",
        "options": ["Adhi-daivika","Adhyatmika","Adhyayan","Adhi-bhautika"],
        "answer": 3
    },
    {
        "title": "What is the soul not made up of?",
        "options": ["Sat (Eternity)","Ahamkara (Ego)","Cit (knowledge)","Ananda (bliss)"],
        "answer": 2
    },
    {
        "title": "Whose another name is Ashutosh?",
        "options": ["Brahma","Vishnu","Shiva","Rama"],
        "answer": 3
    },
    {
        "title": "Where did Lord Chaitanya appear?",
        "options": ["Vrindavan","Jagannath Puri","Badrinath","Navadweep"],
        "answer": 4
    },
    {
        "title": "How many queens Krishna had exactly when he ruled Dwarka city?",
        "options": ["1618","16108","161008","1610008"],
        "answer": 2
    },
    {
        "title": "Which one is among the 4 original vedas?",
        "options": ["Ayurveda","Dhanurveda","Samveda","None"],
        "answer": 3
    },
    {
        "title": "Who is the controller of 'mode of passion' in the material world?",
        "options": ["Lord Vishnu","Lord Brahma","Lord Shiva","None"],
        "answer": 2
    },
    {
        "title": "Whose incarnation is Lord Chaitanya?",
        "options": ["Radha","Krishna","Both Radha & Krishna","None"],
        "answer": 3
    },
    {
        "title": "Which is not among the 3 modes of material nature?",
        "options": ["Goodness","Bliss","Passion","Ignorance"],
        "answer": 2
    },
    {
        "title": "Who is the controller of 'mode of goodness' in the material world?",
        "options": ["Lord Brahma","Lord Shiva","Durga devi","Lord Vishnu"],
        "answer": 4
    },
    {
        "title": "Who is mother of Lord Balram?",
        "options": ["Rohini","Devaki","Yashoda","None of above"],
        "answer": 1
    },
    {
        "title": "To whom did Lord Chaitanya corronate as 'Acharya of Holy name'",
        "options": ["Sanatana Goswami","Haridas Thakur","Rupa Goswami","Adwaita Acharya"],
        "answer": 2
    },
    {
        "title": "What is the name of Krishna’s conchshell?",
        "options": ["Panchajanya","Paundraka","Uttamauja","None"],
        "answer": 1
    },
    {
        "title": "Which is 'not' among the 4 asharams in human society as per Vedic injunctions?",
        "options": ["Brahmachari","None","Grihastha","Sanyasi"],
        "answer": 2
    },
    {
        "title": "How many varieties of living entities are existing there in this universe?",
        "options": ["84 thousand","84 lakh","8.4 crore","84 crore"],
        "answer": 2
    },
    {
        "title": "Who is the author of Vedanta-sutra?",
        "options": ["Srila Prabhupada","Narada","Ved Vyasa","Brahma"],
        "answer": 3
    },
    {
        "title": "Who is first demon/demoness killed by Lord Krishna?",
        "options": ["Aghasura","Banasura","Pootana","Kamsa"],
        "answer": 3
    },
    {
        "title": "What does “Hrishikesh” mean?",
        "options": ["Sage (rishi) who has long hair (kesh)","He who gives pleasure to cows and senses","Master of universe","None"],
        "answer": 2
    },
    {
        "title": "Who is mother of Bheesmadev?",
        "options": ["Yamuna","Ganga","Saraswati","Narmada"],
        "answer": 2
    },
    {
        "title": "Who seized Draupadi by her hair and dragged her into the court?",
        "options": ["Duryodhana","Dushasana","Karna","Vikarna"],
        "answer": 2
    },
    {
        "title": "What is does Bhagavad Gita mean?",
        "options": ["Essay of the Lord","Speech of the Lord","Song of the Lord","Teachings of the Lord"],
        "answer": 3
    }]

    var selectedQuestions = allQuestions.slice(); 
    var questions = []; 
    for(let i = 0; i < NUMBER_OF_QUESTIONS; i++ ){
        let length = selectedQuestions.length;
        let index = Math.round(Math.random()*(length-1));
        questions.push({"id":i,data:selectedQuestions.splice(index,1)[0]});
    }
    export default questions;