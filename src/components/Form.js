"use client";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const author = formData.get("author");

    fetch("https://json-api.uz/api/project/books_hasan/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, author }), // Correctly format the body as an object
    })
      .then((response) => {
        if (response.ok) {
          console.log("Success");
          e.target.reset();
        } else {
          console.error("Failed to submit form data");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <div className="">
      <form className="w-96 " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border rounded-full p-2 border-green-800"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            className="border rounded-full p-2 border-green-800"
          />
        </div>
        <div className="mt-5">
          <button className="px-4 py-2 border rounded-full w-24 btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
