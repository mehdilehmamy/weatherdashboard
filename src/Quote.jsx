import React, {useState} from "react";

function Quote (props) {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    let index = Math.floor(Math.random() * 1500); //Generate random index for quote since the API is not random

    window.onload = function () { //Fetch quotes on screen load
        fetch("https://type.fit/api/quotes").then(function(response) {
          return response.json();
        }).then(function(data) {
            setQuote('"'+ data[index].text +'"');
            if (data[index].author !== null) {
                setAuthor("~" + data[index].author);
            } else {
                setAuthor("~Unknown");
            }
        });
    }
    
    return (
        <div className="quote">
            <p>{quote}</p>
            <em><p>{author}</p></em>
        </div>
    );
}

export default Quote;