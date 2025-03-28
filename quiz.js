var QUESTIONS = [["what's the color of the sky", " blue"], ["what's the color of grass", "green"],["is france a country", "yes"]];

function lancerQuiz(){
    let reponse;
    let count=0;
    for(let i=0; i<QUESTIONS.length;i++){
            reponse=prompt(QUESTIONS[i][0]);
            if (reponse==QUESTIONS[i][1]){
                window.alert("correct");
                count++;
            }
            else{
                window.alert("incorrect, la bonne reponse est: "+QUESTIONS[i][1]);
            }
    }
    window.alert("you got "+ count +" correct answers");
}