# Data binding
* data binding = communication
* TypeScript (business logic) --(output data)--> Template (HTML) --(react to user events) --> TypeScript...

## Output data
* **String Interpolation:** `{{ data }}`
* **Property Binding:** `[property]="data"`

## React to (user) events
* **Event Binding:** `(event)="expression"`

## bindable properties and events
How do you know which properties or events of HTML elements you may bind?
* A good idea is to `console.log()` the element you're interested in to see which properties and events it offers
* For events, you don't bind to onclick but only to click -->`(click)`
* MDN offers nice list of all properties and events of element you're interested in: Google ELEMENT properties or ELEMENT events