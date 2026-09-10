function Comp3() {
  return (
    <>
      <input type="text" name="username" placeholder="Enter Name" />
      <input
        type="number"
        name="age"
        min="0"
        max="120"
        placeholder="Enter Age"
      />
      <input type="email" name="email" placeholder="Enter Email" required />
      <input type="password" name="pwd" placeholder="Enter Password" />
      <input type="checkbox" name="subscribe" checked />
      <button type="button">Click Me</button>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>

      <select name="country">
        <option value="">Select a country</option>
        <option value="in">India</option>
        <option value="us">USA</option>
      </select>

      <section>
        <h2>Section Title</h2>
        <p>Section content goes here.</p>
      </section>

      <textarea name="message" placeholder="Type here..."></textarea>
    </>
  );
}

export default Comp3;
