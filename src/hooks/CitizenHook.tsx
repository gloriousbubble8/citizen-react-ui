import { useEffect, useState } from "react";

interface CitizenResponse {
  citizenId: string;
  ssn: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  genderId: number;
  email: string;
  phoneNumber: string;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: Sort;
  unpaged: boolean;
}

interface PageResponse<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

function CitizenHook() {
  const [citizens, setCitizens] = useState<CitizenResponse[]>([]);
  const [param1, setParam1] = useState<string>("0");
  const [param2, setParam2] = useState<string>("10");

  useEffect(() => {
    function fetchData(page: string, size: string) {
      fetch(`http://localhost:8080/citizen?page=${page}&size=${size}`)
        .then(
          (response) =>
            response.json() as Promise<PageResponse<CitizenResponse>>,
        )
        .then((data) => {
          console.log(data.content);
          setCitizens(data.content);
        });
    }
    fetchData(param1, param2);
  }, [param1, param2]);

  return (
    <>
      <h1>Citizens</h1>
      <div>
        <input id="pageIndexId" type="number" placeholder="Enter pageIndex" />
        <br />
        <input
          id="pageRecordsCountId"
          type="number"
          placeholder="Enter records per page"
        />{" "}
        <br />
        <button
          onClick={() => {
            setParam1(
              (document.getElementById("pageIndexId") as HTMLInputElement)
                .value,
            );
            setParam2(
              (
                document.getElementById(
                  "pageRecordsCountId",
                ) as HTMLInputElement
              ).value,
            );
          }}
        >
          Submit
        </button>
      </div>
      <div>
        {citizens.map((citizen) => (
          <div
            style={{ border: "1px solid black", margin: "10px" }}
            key={citizen.citizenId}
          >
            <h3>
              {citizen.firstName} {citizen.lastName}
            </h3>
            <p>SSN: {citizen.ssn}</p>
            <p>Email: {citizen.email}</p>
            <p>Phone: {citizen.phoneNumber}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CitizenHook;
