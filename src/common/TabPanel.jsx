import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ABOUT THE TOUR" {...a11yProps(0)} />
          <Tab label="RULES" {...a11yProps(1)} />
          <Tab label="NECESSARY INFORMATION" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2 style={{ color: "black" }}>TOUR</h2>
        {[1, 2, 3].map((item, index) => {
          return (
            <div>
              <h3 style={{ color: "red", textTransform: "capitalize" }}>
                Day {index + 1}: hcm-hn-nhatrang (Lunch, dinner)
              </h3>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Morning
                  </span>
                  : Team leader of VIETNET TRAVEL company picks you up at Tan
                  Son Nhat airport - Hanoi station and supports you to carry out
                  procedures to catch a flight to Hanoi, depart for the
                  Northwest tour.
                </li>
                <li>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Planned flight
                  </span>
                </li>
                <li>
                  Upon arrival at Noi Bai airport, the bus will pick you up and
                  depart for Mai Chau. On the way to Hoa Binh, you will have the
                  opportunity to see and visit Da River Hydropower Plant (also
                  known as Hoa Binh Hydroelectricity).
                </li>
                <li>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Noon
                  </span>
                  : Have lunch at the restaurant, continue to depart to Mai
                  Chau, visit Lac village to learn the customs and habits of
                  Thai villages, where bold Thai cultural identity. Leaving Mai
                  Chau, the group departs to Moc Chau Plateau, famous for its
                  green tea hills stretching to the other side of the hill.
                </li>
                <li>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Evening
                  </span>
                  : Have dinner at the restaurant, check in hotel and stay
                  overnight in Moc Chau
                </li>
              </ul>
            </div>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 style={{ color: "black" }}>RULES</h2>
        {[1, 2, 3].map((item, index) => {
          return (
            <div>
              <h3 style={{ color: "red", textTransform: "capitalize" }}>
                Tour price includes:
              </h3>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Transport
                  </span>
                  : New-generation sightseeing car, driver is happy,
                  enthusiastic and friendly
                </li>
                <li>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Accommodation
                  </span>
                  : Overnight in Moc Chau, Son La, Sapa, Dien Bien, Yen Bai:
                  3-star standard hotel with full facilities. Room 2 (2 adult
                  guests/room), if the third person is odd, pay a surcharge for
                  a single room or to share a room with 3 guests.
                </li>
                <li>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Meals
                  </span>
                  : according to the program: Breakfast: 5 breakfasts. Main
                  meals: 11 main meals at the restaurant menu 1500,000 VND/
                  serving Sightseeing tickets according to the program: Hoa Binh
                  Hydroelectricity: 50,000 VND Son La Hydroelectricity: 120,000
                  Heroic Temple + tram: 65,000 VND Waterfall of bibs: 50,000 VND
                </li>
              </ul>
            </div>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2 style={{ color: "black" }}>NECESSARY INFORMATION</h2>
        {[1, 2].map((item, index) => {
          return (
            <div>
              <h3 style={{ color: "red", textTransform: "capitalize" }}>
                CONDITIONS OF TOUR CANCELLATION
              </h3>
              <h4>
                After confirmation and payment (at least 50% deposit for
                reservation and 100% payment at least 24 hours before
                departure), if:
              </h4>
              <ul>
                <li>
                  Hủy tour 10 ngày trước ngày khởi hành: phí hủy 50% tiền tour +
                  100% tiền vé máy bay
                </li>
                <li>
                  Hủy tour 3 ngày trước ngày khởi hành : phí hủy 70% tiền tour +
                  100% tiền vé máy bay
                </li>
                <li>
                  Hủy tour trước 24h so với khởi hành : phí hủy 100% tiền tour +
                  100% tiền vé máy bay
                </li>
              </ul>
            </div>
          );
        })}
      </TabPanel>
    </Box>
  );
}
