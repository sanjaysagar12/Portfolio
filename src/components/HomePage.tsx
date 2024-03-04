function HomePage() {
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col mt-5 text-center order-md-1">
              <img
                className="border border-3 rounded-circle img-thumbnail"
                src="../../photo/profile.jpg"
                alt="Avatar"
              ></img>
            </div>

            <div className="col-md  ">
              <h2 className="mt-5">Hello I'm</h2>
              <h1 className="mt-3 display-1">SANJAY SAGAR</h1>
              <p className="display-6 mt-5">FOUNDER & CEO</p>
              <p className="display-3">PortOS</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default HomePage;
