import React, { Component } from "react";
import Todo from "./Todo";
import IcBaselineAddToPhotos from "./Icons/IcBaselineAddToPhotos";

class Todolist extends Component {
	constructor(props) {
		super(props);

		this.updateCompleted = this.updateCompleted.bind(this)
		this.deleteTodo = this.deleteTodo.bind(this)

		this.state = {
			texte: "",
			todos: [
				{
					id: 1,
					title: "Learn React",
					completed: true,
				},
				{
					id: 2,
					title: "Learn Redux",
					completed: false,
				},
				{
					id: 3,
					title: "Learn React Native",
					completed: false,
				},
			],
		};
	}

	handleChange(event) {
		this.setState({ texte: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			todos: [...this.state.todos, {
				id: this.state.todos.length + 1,
				title: this.state.texte,
				completed: false
			}],
			texte: ""
		})
	}

	updateCompleted(val) {
		let allTodos = this.state.todos;
		let index = allTodos.indexOf(val);
		val.completed = !val.completed;
		allTodos[index] = val;
		this.setState({ todos: allTodos });
	}

	deleteTodo(val) {
		let allTodos = this.state.todos;
		let index = allTodos.indexOf(val);
		allTodos.splice(index, 1);
		this.setState({ todos: allTodos });
	}

	render() {
		return (
			<div className="text-gray-400 bg-white">
				<nav>
					<div className="container mx-auto px-20 py-5 flex justify-between items-center">
						<a className="font-bold text-2xl lg:text-4xl" href="/">
							TodoAn
						</a>
						<div className="block lg:hidden">
							<button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
								<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<title>Menu</title>
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
								</svg>
							</button>
						</div>
						<div className="hidden lg:block">
							<ul className="inline-flex">
								<li><a className="px-4 font-bold" href="/">Mes taches</a></li>
								<li><a className="px-4 hover:text-gray-800" href="/">A propos</a></li>
								<li><a className="px-4 hover:text-gray-800" href="/">Contact</a></li>
							</ul>
						</div>
					</div>
				</nav>
				<section className="container mx-auto px-6 p-5">
					<h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
						Mes taches
					</h2>
				</section>
				<div className="container flex mx-auto justify-center">
					<div className="flex border-2 rounded">
						<button type="submit" className="flex items-center justify-center px-4 border-r">
							<IcBaselineAddToPhotos />
						</button>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<input className="px-4 py-2 w-80" type="text" onChange={this.handleChange.bind(this)} value={this.state.texte} placeholder="Entrer une nouvelle tache" />
						</form>
					</div>
				</div>

				<section className="container flex mx-auto px-6 p-10 justify-center">
					<ul className="divide-y-2 divide-gray-400 flex-1 px-20">
						{this.state.todos.map((todo) => (
							<Todo key={todo.id} todo={todo} updateCompleted={this.updateCompleted} deleteTodo={this.deleteTodo} />
						))}
					</ul>
				</section>
			</div >

		);
	}
}

export default Todolist;

