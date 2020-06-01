import React, { useState } from "react";
import { useStyles } from "@styles/index";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.tab}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Code States" {...a11yProps(0)} />
        <Tab label="AWS" {...a11yProps(1)} />
        <Tab label="Papaya" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="exp_title">
          STUDENT &nbsp;
          <a
            id="link_style"
            target="_blank"
            href="https://www.codestates.com/?gclid=CjwKCAjwq832BRA5EiwACvCWsdaSP6y6ucJrBgZY-3DyzZSWoGY--9Xlby0Ndw8MXqzas7HG4mE82BoCk0gQAvD_BwE"
          >
            @ 코드 스테이츠 / 이머시브 코스
          </a>
        </div>
        <div className="exp_date">2019.07 - 2019.10</div>

        <p className="exp_content_style">
          <div>
            <ul>
              <li className="list_before">
                JS HTML/CSS React Node.js 등 웹 전반에 대해서 배웠습니다.
              </li>
              <li className="list_before">
                전 과정을 페어 프로그래밍으로 진행, 협업 과 소통능력을
                키웠습니다.
              </li>
              <li className="list_before">
                사용 도구로는 Vscode Slack Zoom Notion 을 활용했습니다.
              </li>
            </ul>
          </div>
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="exp_title">
          Participant &nbsp; <span id="link_style">@ AWS 101 & 201</span>
        </div>
        <div className="exp_date">2019</div>
        <p className="exp_content_style">
          {/* <div>
            <ArrowRightRoundedIcon id="tab_arrow_icon" /> AWS 101 201 세미나를
            통해 AWS 클라우드 기초 및 비용 절감 속도 및 배포 전 과정 등을
            교육받았습니다.
          </div> */}
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default VerticalTabs;
