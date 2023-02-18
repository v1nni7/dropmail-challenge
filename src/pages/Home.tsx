import { MdContentCopy } from "react-icons/md";
import { IoReloadCircleOutline } from "react-icons/io5";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useEffect, useState } from "react";
import { getEmail, getIncomingMail } from "../services/api";

export default function Home() {
  const [email, setEmail] = useState("");

  const getEmailAddress = async () => {
    const response = await getEmail();

    localStorage.setItem("user", JSON.stringify(response.data));
  };

  const getIncomingEmail = async () => {
    const response = await getIncomingMail();

    console.log(response);
  };

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user") as string);

    if (!userStorage) {
      return;
    }

    setEmail(userStorage.data.introduceSession.addresses[0].address);
  }, []);

  return (
    <div className="wrapper-page vh-100 p-2">
      <div className="grid-area-brand">
        <div className="bg-secondary p-4 w-25 rounded"></div>
      </div>
      <button onClick={() => getIncomingEmail()} className="btn btn-primary">
        Get Incoming Mail
      </button>
      <button
        onClick={() => getEmailAddress()}
        className="btn btn-secondary mx-2"
      >
        Get Email Address
      </button>
      <div className="grid-area-email border rounded">
        <div className="grid-area-generated-email border-bottom">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="generated-email p-4">
              <div className="generated-email-group">
                <span className="d-block ms-2 fw-semibold">
                  Your temporary email address
                </span>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control fw-bold text-secondary"
                    defaultValue={email}
                  />
                  <button className="btn btn-secondary fw-semibold">
                    <MdContentCopy className="fs-5" /> Copy
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center p-2">
              <div className="d-flex align-items-center fw-semibold text-secondary mx-3">
                Autorefresh in{" "}
                <div className="circular-refresh-progress">
                  <CircularProgressbarWithChildren value={60}>
                    5
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <button className="btn btn-transparent text-secondary d-flex align-items-center fw-semibold">
                <IoReloadCircleOutline className="fs-3" /> Refresh
              </button>
            </div>
          </div>
        </div>
        <div className="grid-area-emails border-end">
          <div className="area-divisor border-bottom d-flex align-items-center py-2 px-3">
            <h4 className="m-0">Inbox</h4>
          </div>
          <ul className="list-group">
            <li className="list-group-item rounded-0 border-0 border-bottom px-1">
              <h5 className="fw-bold m-0">Hello</h5>
              <h6 className="fw-bold text-primary m-0">Welcome</h6>
              <p className="text-secondary m-0">
                Your temp e-mail address is ready...
              </p>
            </li>
          </ul>
        </div>
        <div className="grid-area-content">
          <div className="area-divisor bg-secondary border-bottom"></div>

          <div className="px-2 bg-secondary email-content">
            <h4 className="fw-bold py-2 mb-0 mx-4">Welcome</h4>
            <div className="bg-white p-2 rounded border">
              <p>Hi dfr,</p>
              <p className="fw-bold m-0">
                <span className="bg-secondary">
                  Your temp e-mail address is ready
                </span>
              </p>
              <p>
                If you need help read the information below and do not hesitate
                to contact us.
              </p>
              <p className="m-0">All the best,</p>
              <p>DropMail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
