/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('png');
Config.setCodec('h264');
Config.setConcurrency(4);
Config.setOverwriteOutput(true);
Config.setPixelFormat('yuv420p');
Config.setChromiumOpenGlRenderer('angle');
Config.setScale(1);
