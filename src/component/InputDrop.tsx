import * as t from "./inputDrop.style";

const data = [
  {
    id: "6289fdf93f2a17f9ebd8a4ee",
    age: 29,
    name: "Lila Griffin",
    gender: "female",
    email: "lilagriffin@rockabye.com",
    phone: "+1 (975) 441-2320",
    address: "301 Frank Court, Beason, Texas, 9304",
  },
  {
    id: "6289fdf9c2a55eba296530e1",
    age: 38,
    name: "Angelina Strong",
    gender: "female",
    email: "angelinastrong@rockabye.com",
    phone: "+1 (984) 497-3710",
    address: "123 Rockaway Parkway, Reinerton, Nevada, 9597",
  },
  {
    id: "6289fdf91fb76c5e1d4dbcd2",
    age: 29,
    name: "Peggy Baxter",
    gender: "female",
    email: "peggybaxter@rockabye.com",
    phone: "+1 (813) 415-2208",
    address: "334 Kent Avenue, Lynn, Florida, 5898",
  },
  {
    id: "6289fdf9bf360ec167b0847f",
    age: 28,
    name: "Elizabeth Cole",
    gender: "female",
    email: "elizabethcole@rockabye.com",
    phone: "+1 (923) 494-2943",
    address: "943 Roebling Street, Kanauga, Tennessee, 9085",
  },
  {
    id: "6289fdf96ea327df703b052e",
    age: 30,
    name: "Mildred Kaufman",
    gender: "female",
    email: "mildredkaufman@rockabye.com",
    phone: "+1 (839) 552-3726",
    address: "761 Seaview Court, Deercroft, Puerto Rico, 1527",
  },
];

export const InputDrop = () => {
  return (
    <t.DropContainer>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <t.MainInfo>
              <p>
                {item.name} @{item.id}
              </p>
              <span>{item.email}</span>
            </t.MainInfo>
            <t.SubInfo>{item.gender}</t.SubInfo>
          </li>
        ))}
      </ul>
    </t.DropContainer>
  );
};
