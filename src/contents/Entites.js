import React, { useState } from "react";
import Axios from "axios";
import Items from "./Items";
import TagsItems from "./TagsItems";
import "./Entities.css";
import { FaElementor } from "react-icons/fa";

import ContentTest from "./ContentTest";
function Entites() {
  //Show Data
  const [phraseList, setPhraseList] = useState([]);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState("show");
  
  //input data
  const [inputList, setInputList] = useState("");

  //edit data
  const [update, setUpdate] = useState([]);

  const showCheck = (statusCheck) => {
    statusCheck ? setShow("show") : setShow("hide");
  };

  const deletePhrase = (id) => {
    Axios.delete(`http://localhost:3001/Entites/deletePhrase/${id}`).then(
      (res) => {
        setPhraseList(
          phraseList.filter((val) => {
            return val.id != id;
          })
        );
      }
    );
  };
  const updatePhrase = (id) => {
    if (update != "") {
      Axios.put("http://localhost:3001/Entites/updatePhrase", {
        update: update,
        id: id,
      }).then((res) => {
        setPhraseList(
          phraseList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  update: update,
                }
              : val;
          })
        );
         getPhrase();
      });
    
    } else {
      alert("no word");
    }
  };

  const getPhrase = () => {
    //setStatus(true);
   
    Axios.get("http://localhost:3001/Entites/getPhrase").then((res) => {
      setPhraseList(res.data);
      // console.log(status);
      //console.log(res.data);
    });
  };

  const addPhrase = (event) => {
    event.preventDefault();
    if (inputList != "") {
      console.log(inputList);
      Axios.post("http://localhost:3001/Entites/addPhrase", {
        inputList: inputList,
      })
        .then(() => {
          setPhraseList([
            ...phraseList,
            {
              inputList: inputList,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
      getPhrase();
      setInputList("");
    } else {
      alert("no phrase");
    }
  };

  return (
    <>
      <div className="form-phrase">
        <div className="inline-form">
          <div>
            <label className="head-entities">Phrase</label>
            <form className="form-add" onSubmit={addPhrase}>
              <input
                type="text"
                name="value"
                onChange={(event) => {
                  setInputList(event.target.value);
                }}
                value={inputList}
              />
              
              <button className="btn-add" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>

        {/* ------------Showdata----------- */}
        <button
          className="btn first"
          onClick={() => {
             setStatus(!status);
            getPhrase();
            showCheck(status);
          }}
        >
          <div className="fa-space">
            <FaElementor />
          </div>
          {show}
        </button>
        {status ? (
          <div>
            <table>
              <tr>
                <th>Vaule</th>
                <th className="syn">Synonyms</th>
              </tr>
              {phraseList.map((val, key) => {
                return (
                  <tr>
                    <td>
                      <div className="val-td">
                        {/* <Items key={val.id} input={val.value_name} /> */}
                        <p>{val.value_name}</p>
                        <input
                          type="text"
                          placeholder={val.value_name}
                          onChange={(event) => {
                            setUpdate(event.target.value);
                          }}
                        />
                      </div>
                      <div className="btn-td">
                        <button
                          className="btn-update"
                          onClick={() => {
                            updatePhrase(val.id);
                            console.log("id: "+val.id+" update to: "+update);
                          }}
                        >
                          update
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => {
                            deletePhrase(val.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                    <td width="500px">
                      <TagsItems id={val.id} />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Entites;
