function splitMyText()
{
    event.preventDefault();
    const textInput = document.body.querySelector('#textInput').value;
    const textSplitPoint = document.body.querySelector('#textSplitPoint').value;
    const outputFirstPart = document.body.querySelector('#outputFirstPart');
    const outputSecondPart = document.body.querySelector('#outputSecondPart');
    const inputSplitBefore = document.body.querySelector('#inputSplitBefore');
    const inputSplitAfter = document.body.querySelector('#inputSplitAfter');
    
    if (textInput.length !== 0)
    {
        if(inputSplitBefore.checked === true)
        {
            outputFirstPart.textContent = textInput.slice(0, textInput.indexOf(textSplitPoint));
            outputSecondPart.textContent = textInput.slice(textInput.indexOf(textSplitPoint));
        }
        else if (inputSplitAfter.checked === true)
        {
            outputFirstPart.textContent = textInput.slice(0, textInput.indexOf(textSplitPoint) + textSplitPoint.length);
            outputSecondPart.textContent = textInput.slice(textInput.indexOf(textSplitPoint) + textSplitPoint.length);
        }
    }
    else
    {
        outputFirstPart.textContent = "Bitte zu trennende Zeichenkette oben ins Eingabefeld eingeben.";
        outputSecondPart.textContent = "";
    }
}