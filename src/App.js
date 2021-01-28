import React, {useState} from "react";
import ToDoList from "./ToDoList.js";
import './App.css';
export default function App(){
	const[name, setName] = useState("");
	const [Items, setItems] = useState([]);
	const view = (event) =>{
		setName(event.target.value);
	}
	const ListItems = () =>{
		setItems((oldItems) => {
			return [...oldItems, name];
		})
	setName("");
	}
	return (
		<>
		<div className = "main_head">
			<div className = "data">
			<h4>ToDoList</h4>
				<input type = "text" onChange = {view} />
				<input type = "submit" value = "+" onClick = {ListItems} />
				<ul>
					<h3>{name}</h3>
					{Items.map((itemval,index) =>{
						return <ToDoList key = {index} text = {itemval} />;
	})}
				</ul>
			</div>
		</div>
		</>
	);
}