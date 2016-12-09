import { INote, Note } from '../models/note.model';

let note = new Note( 0 , 
                     "Hola Mundo 1"
                   , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                   , "Tkc"
                   , new Date(2016,1,1,0,0,0,0));

let note2 = new Note( 1 , 
                      "Hola Mundo 2"
                    , "Contenido de la nota 2"
                    , "Tkc"
                    , new Date(2016,2,1,0,0,0,0));
let note3 = new Note( 2 , 
                      "Hola Mundo 3"
                    , "Contenido de la nota 3"
                    , "Tkc"
                    , new Date(2016,3,1,0,0,0,0));
let note4 = new Note( 3 , 
                      "Hola Mundo 4"
                    , "Contenido de la nota 4"
                    , "Tkc"
                    , new Date(2016,4,1,0,0,0,0));

export const NOTES: INote[] = [note, note2, note3, note4];