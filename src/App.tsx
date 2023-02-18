import { MdContentCopy } from "react-icons/md";
import { IoReloadCircleOutline } from "react-icons/io5";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "./index.scss";

export default function App() {
  return (
    <div className="p-2">
      <div className="bg-secondary mb-5 p-4 w-25"></div>

      <main className="border">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center p-4">
              <div className="display-generated-email">
                <div className="display-group">
                  <span className="mx-2 d-block">
                    Your temporary email address
                  </span>
                  <div className="d-flex align-items-center input-group">
                    <input
                      type="text"
                      className="form-control fw-bold text-secondary"
                      value={"dysyky@ema-sofia.eu"}
                      disabled
                    />
                    <button className="btn btn-secondary fw-semibold">
                      <MdContentCopy className="fs-4" /> Copy
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="d-flex align-items-center py-3">
                    <div className="d-flex align-items-center fw-semibold text-secondary">
                      Autorefresh in{" "}
                      <div
                        className="d-block"
                        style={{ width: 30, fontSize: ".75rem", marginLeft: 5 }}
                      >
                        <CircularProgressbarWithChildren value={50}>
                          <span className="fw-bold">5</span>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                    <button className="btn btn-transparent text-secondary fw-semibold d-flex align-items-center p-2 mx-3">
                      <IoReloadCircleOutline className="fs-2" /> Refresh
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
      </main>
    </div>
  );
}
