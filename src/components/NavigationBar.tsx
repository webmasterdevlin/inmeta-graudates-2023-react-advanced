import React from 'react';
import { Sun as SunIcon, Moon as MoonIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { pathNames } from '../Routes';
import { useThemeStore } from '../store/themeStore';
import Button from './Button';

const NavigationBar = () => {
  const navigate = useNavigate();
  const { setDarkTheme, setLightTheme } = useThemeStore();
  const theme = useThemeStore(state => {
    return state.theme;
  });

  return (
    <>
      <div className={'mih-50 flex flex-row flex-wrap items-center justify-between'}>
        <div>
          {Object.entries(pathNames)?.map(([key, value], index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  navigate(value);
                }}
              >
                {key}
              </Button>
            );
          })}
          <div>
            <div className="mih-50 flex flex-row flex-wrap items-center justify-between gap-10 pr-10">
              {theme.isDark ? (
                <SunIcon className={'cursor-pointer'} onClick={setLightTheme} />
              ) : (
                <MoonIcon className={'cursor-pointer'} onClick={setDarkTheme} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
