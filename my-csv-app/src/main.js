"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.tsx
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_router_dom_1 = require("react-router-dom");
const CSVForm_1 = __importDefault(require("./components/CSVForm"));
const DataDisplay_1 = __importDefault(require("./pages/DataDisplay"));
require("./styles.css");
client_1.default.createRoot(document.getElementById('app')).render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<CSVForm_1.default />}/>
        <react_router_dom_1.Route path="/display" element={<DataDisplay_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>);
