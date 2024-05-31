export default function MealForm() {
  return (
    <>
      <header></header>
      <main>
        <form>
          <div className="row">
            <label htmlFor="name">Title</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div className="row">
            <label htmlFor="summary">Summary</label>
            <textarea id="summary" name="summary" rows={10}></textarea>
          </div>
          <div>Image</div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}
