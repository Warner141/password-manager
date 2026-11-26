import InputDialog from "../components/input-dialog/password-entry-popup";

export default function HomePage() {
  function onAddPassword() {
    alert("Add password button is pressed");
  }
  interface password {
    name: string;
    link: string;
    password: string;
  }
  const passwords: password[] = [
    { name: "Website", link: "www.website.com", password: "Password_1234" },
    {
      name: "BlindSpot",
      link: "https://minesweeper-puzzle-game.vercel.app/",
      password: "54321",
    },
  ];
  return (
    <div className="flex flex-col bg-blue-200 w-60 md:w-120 lg:w-180 mr-auto ml-auto">
      <div className="text-3xl">Passwords</div>
      <div className="flex justify-evenly">
        <div className="text-l">Create and manage your passwords</div>
        <div onClick={onAddPassword}>Add</div>
        <InputDialog></InputDialog>
      </div>

      <div>
        {passwords.map((password: password) => {
          return (
            <div key={password.link} className="flex justify-evenly">
              <div>{password.name}</div>
              <div>{password.password}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
