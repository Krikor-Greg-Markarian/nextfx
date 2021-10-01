import React from "react";
import cn from "classnames";
import JobOpening from "../components/JobOpening";

function CUrrentJobItem(props) {
  return (
    <div>
      <div className={cn("container mx-auto")}>
        <div className={cn("w-11/12")}>
          <p className={cn("text-sm text-blue-700 text-center pt-12 mb-0")}>
            We're hiring
          </p>
          <p className={cn("font-bold text-center text-2xl text-blue-900")}>
            Current job Openings
          </p>
          <p className={cn("text-sm text-gray-500 text-center pb-4")}>
            our team is continually looking to recuit exceptional talent in all
            business areas and markets where we offer service. We're always
            looking for people to join our team.
          </p>
          <div>
            <div className={cn("grid grid-cols-4")}>
              <div className={cn("col-span-1")}>
                <p
                  className={cn(
                    "text-sm text-center pr-20 text-blue-900 font-bold"
                  )}
                >
                  Role
                </p>
              </div>
              <div className={cn("col-span-1")}>
                <p
                  className={cn("text-sm text-center text-blue-900 font-bold")}
                >
                  Location
                </p>
              </div>
              <div className={cn("col-span-1")}>
                <p
                  className={cn("text-sm text-center text-blue-900 font-bold")}
                >
                  Type
                </p>
              </div>
            </div>
          </div>

          {props.select.map((item, idx) => (
            <JobOpening
              key={idx}
              title={item.title}
              city={item.city}
              time={item.time}
              button={item.button}
              backgroundcolor={item.backgroundcolor}
            />
          ))}
          <p className={cn("text-xs text-gray-500 text-center pt-4")}>
            We are always on the looout for talented fol to join our team.Follow
            us on <a href="">Linkedin</a>!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CUrrentJobItem;
