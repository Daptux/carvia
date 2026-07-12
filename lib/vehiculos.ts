// Datos de ejemplo (mock) para el MVP de AutoHub AI.
// Se reemplazarán por datos reales desde la base de datos cuando exista el backend.

export type Combustible =
  | "Gasolina"
  | "Diesel"
  | "Híbrido"
  | "Eléctrico"
  | "Gas";

export type Transmision = "Automática" | "Mecánica";

export type Categoria = "carros" | "motos" | "camiones" | "otros";

export interface Vehiculo {
  id: string;
  titulo: string;
  marca: string;
  categoria: Categoria;
  precio: number; // COP
  anio: number;
  km: number;
  ciudad: string;
  combustible: Combustible;
  transmision: Transmision;
  destacado?: boolean;
  promocion?: boolean;
  permuta?: boolean;
  // Color de acento para el banner de la tarjeta (sin imágenes externas por ahora)
  color: string;
}

export const categorias: {
  id: Categoria;
  label: string;
  icon: string;
}[] = [
  { id: "carros", label: "Carros y camionetas", icon: "🚗" },
  { id: "motos", label: "Motos", icon: "🏍️" },
  { id: "camiones", label: "Camiones", icon: "🚚" },
  { id: "otros", label: "Otros", icon: "🚜" },
];

export const combustibles: { label: Combustible; icon: string }[] = [
  { label: "Híbrido", icon: "🔋" },
  { label: "Eléctrico", icon: "⚡" },
  { label: "Diesel", icon: "🛢️" },
  { label: "Gasolina", icon: "⛽" },
  { label: "Gas", icon: "💨" },
];

export const marcas = [
  "Audi",
  "BMW",
  "Chevrolet",
  "Ford",
  "Honda",
  "Jeep",
  "KIA",
  "Mazda",
  "Mercedes Benz",
  "Nissan",
  "Renault",
  "Suzuki",
  "Toyota",
  "Volkswagen",
];

export const vehiculos: Vehiculo[] = [
  {
    id: "toyota-hilux-2024",
    titulo: "Toyota Hilux 2.4 Diesel 4x4",
    marca: "Toyota",
    categoria: "carros",
    precio: 187000000,
    anio: 2024,
    km: 24800,
    ciudad: "Bogotá",
    combustible: "Diesel",
    transmision: "Mecánica",
    destacado: true,
    permuta: true,
    color: "#1e3a8a",
  },
  {
    id: "mazda-cx5-2023",
    titulo: "Mazda CX-5 Touring 2023",
    marca: "Mazda",
    categoria: "carros",
    precio: 118800000,
    anio: 2023,
    km: 33000,
    ciudad: "Medellín",
    combustible: "Gasolina",
    transmision: "Automática",
    destacado: true,
    color: "#7f1d1d",
  },
  {
    id: "toyota-corolla-hibrido-2023",
    titulo: "Toyota Corolla Híbrido 2023",
    marca: "Toyota",
    categoria: "carros",
    precio: 93900000,
    anio: 2023,
    km: 41998,
    ciudad: "Cali",
    combustible: "Híbrido",
    transmision: "Automática",
    destacado: true,
    color: "#065f46",
  },
  {
    id: "audi-q3-2023",
    titulo: "Audi Q3 Sportback 2023",
    marca: "Audi",
    categoria: "carros",
    precio: 150000000,
    anio: 2023,
    km: 33000,
    ciudad: "Barranquilla",
    combustible: "Gasolina",
    transmision: "Automática",
    destacado: true,
    color: "#111827",
  },
  {
    id: "bmw-x6-2020",
    titulo: "BMW X6 M40i xDrive 2020",
    marca: "BMW",
    categoria: "carros",
    precio: 229900000,
    anio: 2020,
    km: 39000,
    ciudad: "Medellín",
    combustible: "Gasolina",
    transmision: "Automática",
    promocion: true,
    color: "#1f2937",
  },
  {
    id: "chevrolet-sail-2018",
    titulo: "Chevrolet Sail LT 2018",
    marca: "Chevrolet",
    categoria: "carros",
    precio: 38000000,
    anio: 2018,
    km: 89000,
    ciudad: "Cali",
    combustible: "Gasolina",
    transmision: "Mecánica",
    promocion: true,
    permuta: true,
    color: "#9a3412",
  },
  {
    id: "nissan-frontier-2023",
    titulo: "Nissan Frontier SE 4x4 2.5",
    marca: "Nissan",
    categoria: "carros",
    precio: 139900000,
    anio: 2023,
    km: 62000,
    ciudad: "Bucaramanga",
    combustible: "Diesel",
    transmision: "Mecánica",
    promocion: true,
    color: "#374151",
  },
  {
    id: "renault-duster-2022",
    titulo: "Renault Duster Intens 2022",
    marca: "Renault",
    categoria: "carros",
    precio: 74500000,
    anio: 2022,
    km: 45000,
    ciudad: "Bogotá",
    combustible: "Gasolina",
    transmision: "Automática",
    promocion: true,
    color: "#854d0e",
  },
];

const COP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function formatoCOP(valor: number): string {
  return COP.format(valor);
}

// Cuota mensual aproximada: crédito referencial a 72 meses, tasa ~1.6% m.v.
export function cuotaMensual(precio: number): string {
  const meses = 72;
  const tasa = 0.016;
  const cuota =
    (precio * tasa) / (1 - Math.pow(1 + tasa, -meses));
  return COP.format(Math.round(cuota));
}

export function formatoKm(km: number): string {
  return new Intl.NumberFormat("es-CO").format(km) + " km";
}
