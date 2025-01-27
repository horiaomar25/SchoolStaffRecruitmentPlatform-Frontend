


const ProfileCard = () => {
  return (
      <>
          <div className="card bg-base-100 w-96 shadow-md ">
              <figure className="px-0 pt-0">
                  <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                  />
              </figure>
              <div className="card-body items-center text-center">
                  <h2 className="card-title">Name</h2>
                  <h3 className="card-title">Role</h3>
                  <p>Experience in early years education</p>
              </div>
          </div>
      </>
  );
}

export default ProfileCard;