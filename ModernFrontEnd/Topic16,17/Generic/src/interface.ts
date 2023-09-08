type ImgUrlType = null | string | string[];

type UserType = {
  name: string;
  id: string | number;
  img_url: ImgUrlType;
};

const data: UserType = {
  name: "Fullname",
  img_url: "dasda",
  id: "Udasdaj21adas",
};

interface UserListData {
  status: number;
  data: UserType[];
}

const response: UserListData = {
  status: 200,
  data: [
    {
      name: "Fullname",
      img_url: "dasda",
      id: "Udasdaj21adas",
    },
    {
      name: "Fullname",
      img_url: "dasda",
      id: "Udasdaj21adas",
    },
    {
      name: "Fullname",
      img_url: "dasda",
      id: "Udasdaj21adas",
    },
  ],
};

interface A {
  x?: number;
  y?: number;
}

interface C extends A {
  z: string;
  d: boolean;
}

const result: C = {
  z: "test1",
  d: true,
  x: 1,
  y: 5,
};

interface D {
  x: number;
}

interface L {
  g: boolean;
}

const result2: L & D = {
  g: true,
  x: 4,
};

const resultObj: { name: string } & { married: boolean } = {
  name: "Kenan S",
  married: true,
};

const j: string = "Hey";

function monitor(param: string): void {
  console.log(param);
}

monitor(j as string);

// let el1 = document.querySelector("div") as HTMLDivElement;
let el1 = document.querySelector("div") as HTMLDivElement;

el1.innerHTML = "Tes1";
