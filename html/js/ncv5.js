/*
 *  2024.11.24
 *  ncv5.js
 *  ver.0.8
 *  Kunihito Mitsuboshi
 *  license(Apache-2.0) at http://www.apache.org/licenses/LICENSE-2.0
 */


function upordown(elm)
{
	elm.ondragstart = function ()
	{
		event.dataTransfer.setData('text/plain', event.target.id);
		let lifted = document.getElementById(event.dataTransfer.getData('text/plain'));
		lifted.style.background = "red";
	};
	elm.ondragover = function ()
	{
		event.preventDefault();
		let lifted = document.getElementById(event.dataTransfer.getData('text/plain'));

		let rect = this.getBoundingClientRect();
		if ((event.clientY - rect.top) < (this.clientHeight / 2)) this.parentNode.insertBefore(lifted, this);
		else this.parentNode.insertBefore(lifted, this.nextSibling);
	};
	elm.ondragleave = function ()
	{
		//event.preventDefault();
		let lifted = document.getElementById(event.dataTransfer.getData('text/plain'));
		//this.style.background = "";
	};
	elm.ondrop = function ()
	{
		event.preventDefault();
		let lifted = document.getElementById(event.dataTransfer.getData('text/plain'));

		//this.style.background = "";
		lifted.style.background = "";
	};
}

// document.querySelectorAll('.num-list li').forEach(function (elm){upordown(elm);});
document.querySelectorAll('.num-list li').forEach(elm => upordown(elm));


