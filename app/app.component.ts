import {Component} from '@angular/core';

@Component(
{
	selector: 'pm-app',
	template: `<pm-header></pm-header>
	<div>
		<h1>Hello World</h1>
	</div>
	<pm-product></pm-product>
	`
})

export class AppComponent{
	
}