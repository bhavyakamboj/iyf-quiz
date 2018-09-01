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
    }]

    var selectedQuestions = allQuestions.slice(); 
    var questions = []; 
    for(let i = 0; i < NUMBER_OF_QUESTIONS; i++ ){
        let length = selectedQuestions.length;
        let index = Math.round(Math.random()*(length-1));
        questions.push({"id":i,data:selectedQuestions.splice(index,1)[0]});
    }
    export default questions;