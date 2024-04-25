import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-auto w-full px-4">
      <Link to="/">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NiA1NiI+PHBhdGggZmlsbD0iIzAwQTBERiIgZD0iTTAgMGg1NS45djU1LjlIMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNDguNiAyNS4zYzAtLjgtLjUtMS40LS45LTItLjQtLjQtLjctLjgtLjctMS4zIDAtLjYuNC0xIC45LTEgLjMgMCAuNS4xLjcuMi4yLjEuNS4yLjcuMi40IDAgLjctLjQuNy0uNyAwLS40LS40LS44LTEuMS0uOC0xLjYgMC0zIDEuOC0zIDMuMiAwIC44LjUgMS40LjkgMS45LjMuNC42LjguNiAxLjIgMCAuNi0uNiAxLTEuMSAxLS42IDAtLjktLjMtMS4zLS42LS4yLS4yLS40LS40LS42LS40LS4zIDAtLjQuNi0uNC45IDAgLjQuNyAxIDEuNiAxIDEuNC0uMiAzLTEuNCAzLTIuOE0xNC41IDE1LjVjLS4xIDAtLjEgMCAwIDBsLS4xLjR2LjFoLjVjLjQuMS41LjEuNS4zIDAgLjMtLjQgMS4zLS45IDIuN2wtLjQgMS4zYy0uNCAxLjEtMSAyLjctMS41IDQtLjYgMS42LTEuMSAyLjktMS4xIDMuMSAwIC4yLjEuMy42LjNzLjctLjEuOC0uM2MuOS0yLjkgMy4zLTYuMiA0LjUtNi4yLjQgMCAuNS4xLjUuNSAwIC42LS41IDEuOC0xLjEgMy0uNSAxLS45IDItLjkgMi41IDAgLjQuMi42LjYuNiAxLjIgMCAyLjItMS4xIDIuOS0ybC4xLS4xLS4zLS4zaC0uMWMtLjQuNC0xLjEgMS4xLTEuMyAxLjFoLS4xdi0uMmMwLS4xLjEtLjQuMy0uOC41LTEuMSAxLjMtMyAxLjMtNC4xIDAtLjktLjQtMS40LTEuMi0xLjQtMS41IDAtMi43IDEuNy0zLjMgMi42LS4xLjItLjMuNC0uMy40cy4xLS4yLjItLjZjLjItLjQuNC0xIC43LTEuOCAxLjEtMyAxLjYtNC41IDEuNi00LjcgMC0uMi0uMi0uMi0uMy0uMmgtMi4yek0xMS4xIDI2LjFjLjEtLjEuMS0uMSAwIDAgMC0uMS0uMy0uMy0uMy0uMy0uNS40LTEuNCAxLjItMi4yIDEuMi0uMyAwLS42LS4xLS44LS4zLS4zLS4yLS40LS42LS40LTEuMS0uMS0xLjIgMS0zLjEgMi00LjIuNi0uNiAxLjEtLjkgMS40LS45LjQgMCAuNy4zIDEgLjYuMi4zLjQuNS43LjUuMSAwIC4zLS4xLjMtLjIuMS0uMS4yLS4zLjItLjQgMC0uNS0uNS0xLjItMS42LTEuMy0xLjIgMC0yLjguNy00IDEuOS0xLjEgMS4xLTEuNyAyLjUtMS42IDMuOCAwIDEuMS42IDIuMyAyLjIgMi4zIDEuNi4yIDIuOS0xLjIgMy4xLTEuNk0zMS4zIDIzLjNjMCAuMS0uMS4yLS4xLjJ2LS4xYzAtLjEuMS0uNC4yLS44LjItLjguNC0xLjguNC0yLjEgMC0uNC0uMi0uNi0uNi0uNi0uOCAwLTIuMSAxLjQtMi41IDIuMWwuMi4zLjEtLjEuMS0uMWMuMy0uNC45LTEuMSAxLjItMS4xLjIgMCAuMy4yLjMuNSAwIC43LS44IDIuOS0xLjMgNC40LS4zLjgtLjUgMS40LS41IDEuNSAwIC4yLjEuMi4yLjJoLjdjLjEgMCAuMi0uMS4zLS4zIDAgMCAuMy0uOC41LTEuMiAxLjQtMi44IDIuMS00LjIgMi43LTQuOC40LS40LjctLjUuOS0uNS4yIDAgLjIuMS4zLjIuMS4xLjIuMy40LjMuMSAwIC4zIDAgLjQtLjEuMi0uMi4zLS40LjMtLjcgMC0uNS0uNC0uNy0uNy0uNy0xLjQuMS0yLjMgMS0zLjUgMy41TTI3IDE5LjdjLS4xIDAtLjIuMS0uMi4yLS4xLjEtLjEuMi0uMy4yLS4xIDAtLjIgMC0uNC0uMS0uMiAwLS40LS4xLS43LS4xLTMuNSAwLTUuMyA0LjctNS4zIDYuMyAwIDEuMS42IDEuNiAxLjIgMS42LjcgMCAxLjctLjIgMy0yLjJsLjMtLjV2LjFsLS4xLjJjLS4yLjMtLjUgMS0uNSAxLjYgMCAuMy4xLjUuMi42LjEuMS4zLjIuNS4yIDEuMiAwIDIuMi0xLjYgMi42LTIuMmwtLjMtLjNoLS4xbC0uMy4zYy0uNC40LS44IDEtMS4xIDFoLS4xdi0uMmMwLS40LjgtMi4zIDEuMy0zLjguNC0xLjEuOC0yLjEuOC0yLjMgMCAwIDAtLjItLjEtLjJsLS41LS4zYy4yLS4xLjEtLjEuMS0uMW0tNS41IDYuMmMwLTIuMyAxLjgtNS40IDMuNi01LjQuNiAwIC45LjMuOS45IDAgLjktMi40IDUuMi00IDUuMi0uMy4xLS41IDAtLjUtLjdNMzguMiAyNS43YzAgMS4zLjggMi4yIDIgMi4yIDEuNCAwIDIuOS0xLjQgMy4zLTEuOFYyNmwtLjItLjNoLS4xbC0uMi4xYy0uNS40LTEuMyAxLTIgMS0uOCAwLTEuMy0uNS0xLjMtMS4zIDAtMSAuNS0xLjcuOC0yLjN2LS4xaC44YzEuMyAwIDMuNy0uNiAzLjctMi4xIDAtLjYtLjYtMS4zLTEuNi0xLjMtMiAuMi01LjIgMy4yLTUuMiA2bTUuMS01LjNjLjQgMCAuNy4zLjcuNyAwIDEtMS4xIDEuNS0zIDEuNS4zLS43IDEuNC0yLjIgMi4zLTIuMk0zNy42IDI1LjhzMC0uMSAwIDBjMC0uMS0uMy0uNC0uMy0uNGwtLjEuMWMtLjcuNy0xIDEuMi0xLjQgMS4yaC0uMXMtLjEtLjEtLjEtLjJjMC0uNC43LTIuNCAyLjEtNmwxLTIuNmMuNS0xLjMuOC0yIC44LTIuMXYtLjFjMC0uMS0uMS0uMS0uMy0uMWgtMi4zcy0uMSAwLS4xLjF2LjVoLjVjLjMuMS41LjIuNS40IDAgLjMtMS41IDQtMS41IDQtLjggMi0yLjIgNS41LTIuMiA2LjMgMCAuNC4xLjcuMi44LjIuMi40LjMuNy4zLjkgMCAxLjktMS4yIDIuNS0yek01LjkgMzIuOGMwIDEuMS45IDEuNyAxLjcgMi4xbC40LjJjLjguNCAxLjIuOSAxLjIgMS41IDAgLjctLjUgMS4zLTEuMiAxLjMtMS4xIDAtMS43LTEuMS0yLTEuOGwtLjQuMWMuMS43LjMgMS41LjMgMS44aC4ybC41LjJjLjMuMS43LjIgMS4xLjIgMS41IDAgMi42LS45IDIuNi0yLjMgMC0xLjMtMS0xLjktMS43LTIuMmwtLjMtLjFjLS45LS41LTEuMy0uOS0xLjMtMS41cy40LTEuMiAxLjEtMS4yYy45IDAgMS4zLjcgMS41IDEuNGwuNC0uMWMtLjEtLjYtLjItMS4xLS4yLTEuNWwtLjMtLjEtLjItLjFjLS4zLS4xLS43LS4yLTEtLjItMS40LjEtMi40IDEtMi40IDIuM00xMS4yIDM0LjZjMCAxLjkgMS4zIDMuNyA0LjIgMy43LjcgMCAxLjctLjIgMi4xLS4zLjItLjUuNS0xLjQuNi0xLjlsLS40LS4xYy0uNiAxLjItMS4xIDEuOC0yLjQgMS44LTEuNiAwLTIuNy0xLjQtMi43LTMuNSAwLTEuNS43LTMuMiAyLjctMy4yIDEuMiAwIDEuOC41IDIuMSAxLjdoLjRsLS4xLS41LS4yLTEuM2gtLjJjLS40LS4xLTEtLjItMS44LS4yLTIuNS0uMi00LjMgMS40LTQuMyAzLjhNMjYuNSAzMC44aC0zLjJ2LjRjLjguMS45LjEuOSAxLjR2MS41aC0zLjR2LTEuNWMwLTEuMi4xLTEuMy45LTEuNHYtLjRoLTMuM3YuNGMxIC4xIDEgLjIgMSAxLjR2NGMwIDEuMi0uMSAxLjMtMSAxLjR2LjRoMy4zVjM4Yy0uOC0uMS0xLS4xLTEtMS40di0xLjloMy40djEuOWMwIDEuMi0uMSAxLjMtMSAxLjR2LjRoMy4zVjM4Yy0uOS0uMS0xLS4xLTEtMS40di00YzAtMS4yLjEtMS4zIDEtMS40ek0zNy44IDMwLjhoLTIuNnYuNGguNGMuMiAwIC4zLjEuNC4xIDAgLjEuMS4xLjEuMnMwIC4zLS4xLjVjMCAuMS0uNiAyLjYtMS4xIDQuMi0uMS0uMi0yLTUuMy0yLTUuM2gtLjVzLTEuNyA1LjMtMS43IDUuNGMtLjEtLjItMS4zLTQuNC0xLjMtNC40IDAtLjItLjEtLjMtLjEtLjR2LS4yYy4xLS4xLjItLjEuNC0uMWguNHYtLjNIMjd2LjRjLjYuMS44LjEgMS4xIDEuMWwxLjkgNmguNXMxLjctNS4yIDEuOC01LjNjLjEuMiAxLjkgNS4zIDEuOSA1LjNoLjVjMS0zLjUgMS45LTUuOSAxLjktNiAuNC0xIC41LTEuMSAxLjItMS4xek0zOS44IDMyLjZzLjggMi40LjkgMi40SDM5Yy0uMSAwIC44LTIuNC44LTIuNG0xLjQuMi0uOC0yLjEtLjUuMS0yLjMgNS45Yy0uNCAxLS41IDEuMS0xLjIgMS4xdi40SDM5di0uNGgtLjNjLS4yIDAtLjQtLjEtLjQtLjJ2LS4yYzAtLjEgMC0uMi4xLS40bC4xLS4yYy4xLS40LjMtMSAuNC0xLjJINDFjLjIuNi41IDEuMy42IDEuNiAwIC4xLjEuMi4xLjN2LjFjMCAuMS0uMS4xLS4zLjFsLS4zLjF2LjNoM3YtLjRjLS42LS4xLS44LS4xLTEuMi0xLjF6TTQ2LjUgMzEuOGMwLS4zIDAtLjUuMS0uNWguNWMuMyAwIDEuNC4xIDEuNCAxLjQgMCAuOS0uNiAxLjQtMS42IDEuNGgtLjR6bS0yLjEtMXYuNGMuOC4xLjkuMS45IDEuNHY0YzAgMS4yLS4xIDEuMy0xIDEuNHYuNGgyLjhjLjkgMCAxLjctLjIgMi4yLS41LjctLjQgMS0xIDEtMS43IDAtMS0uNy0xLjctMi0xLjkuNi0uMSAxLjYtLjYgMS42LTEuNiAwLS42LS4yLTEtLjYtMS4zLS40LS4zLS45LS40LTEuOC0uNGgtMy4xem0yLjUgMy42YzEuMyAwIDIgLjYgMiAxLjdzLS44IDEuNi0xLjUgMS42Yy0uMyAwLS41IDAtLjYtLjEtLjItLjItLjItLjUtLjItMS4xdi0yYzAtLjEuMy0uMS4zLS4xIi8+PC9zdmc+"
          alt="Charles Schwab"
          height={64}
          width={64}
        />
      </Link>
    </div>
  );
};

export default Header;