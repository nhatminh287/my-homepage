const Registration = () => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Register Now</h2>
      <form className="max-w-lg mx-auto mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default Registration;
