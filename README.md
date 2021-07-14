### React - Tutorial - John Smilga - Udemy

It's all about components - independent chunks of user interfaces

With the latest version (17.0), you don't have to import it anymore.

##### JSX Rules

1. Always return a single element

```
function JsxRules() {
  return (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 1</h2>
      <h3>Heading 1</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  )
}
```

In the above all the elements are wrapped in one <div> tag.

- We cannot add another `<div>` after this
- Multiple elements must be enclosed in a `<div>` in the return statement, to avoid errors/crashinh

2. If we need multiple adjacent `<div>` tags, we enlose all the divs in `<React.Fragment>` or `<>`

```
function JsxRules() {
  return (
    <React.Fragment>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 1</h2>
        <h3>Heading 1</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 1</h2>
        <h3>Heading 1</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </React.Fragment>
  )
}
```

3. Use camel case for class or any attributes in the jsx - `className`, `myAttribute`

```
  <div className='myClassName'>
    <h1>Heading 1</h1>
    <h2>Heading 1</h2>
    <h3>Heading 1</h3>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
```

4. Close every element

```
  <div></div>
  <img /> or <img></img>
  <ComponentName /> or <ComponentName></ComponentName>
```

5. Formatting is important

- If using emmet extensions, make sure to use paranthesis since some of the extensions add `;` at the end of a line

```
  return;
  <div></div>;
```

The above is caused by one of my extension and added `;` after the return

##### Spread Operator

`return <Book key={book.id} book={book} />;`
Can be changed to
`return <Book key={book.id} {...book} />;`
using spread operator. Now, in the component, we don't need to use `props.book`.
We can simply access `props`
