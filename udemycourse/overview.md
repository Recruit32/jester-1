# Angular 7

## using Bootstrap (css)
* `npm install --save bootstrap@3`

  * this downloads bootstrap and stores it in the node_modules folder

* angular.json (config file) -> styles[] in architect -> build -> options

  * can use src/styles.css to define global styles
  * add node_modules/bootstrap/dist/css/bootsrap.min.css prior to src/styles.css

## how an angular app gets loaded and started
1.  src/index.html

    ```html
    <app-root></app-root>
    ```

2.  src/app/app.component.ts

    ```typescript
    @Component({
      selector: 'app-root',
      // ...
    })
    export class App Component { }
    ```

3.  src/main.ts

    ```typescript
    import { AppModule } from './app/app.module';
    // ...
    platformBrowserDynamic().bootstrapModule(AppModule);
    ```

4.  src/app/app.module.ts

    ```typescript
    @NgModule({
      declarations: [...],
      imports: [...],
      providers: [...],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

## components & modules
* you build your whole application by composing it from a couple of components
* each component has its own template, its own styling, its own business logic
* components allows us to split up our complex application into reusable parts; you may use a component more than once, and that allows you to easily replicate that business logic
* angular uses components to build web pages and uses modules to basically bundle components into packages
* for a lot of projects, just having a single app module is sufficient; only in bigger projects might you consider splitting up your app into multiple modules

## decorators 
* type of feature which allow you to enhance your classes/elements

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentName',
  templateUrl: './componentName.component.html',
  // ...
})
export class ComponentName { }
```

```typescript
import { NgModule } from '@angular/core';
// ...
import { SomeOtherComponent } from './path/to/someothercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* declarations: register new components in this array
* bootstrap: responsible for telling angular which component to be aware of at the point the whole application starts

## create components with CLI
`ng generate component <componentName>`

`ng g c <componentName>`