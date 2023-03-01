// Task description:

// You need to develop a dictionary into which you can add words with their description, delete words and get them.
// First, create the Dictionary class. Its constructor accepts 1 name parameter.
// Initialize this value with this. Also, the designer should declare words, which should be an empty object by default.
// You need to add 4 methods to the Dictionary class:
// 1. add. This method adds a new word to the dictionary. It takes 2 parameters: word, description 
// 2. If a word already exists in the words object, you do not need to overwrite a word that was previously saved. 
// 3. get. This method gets a word from the dictionary. It takes a key from the word object. 
//    From method you must return found word object by passed key parameter
// 4. showAllWords. This method does not accept any parameters. Its task is to print all the words in the object words into the console 
//    in the format "word - description" 

class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
            }
        }
    }

    remove(word) {
        delete this.words[word];
    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        Object.values(this.words).forEach((wordItem) => {
            console.log(`${wordItem.word} - ${wordItem.description}`);
        });
    }
}