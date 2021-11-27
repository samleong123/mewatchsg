#!/bin/bash

echo -e "\e[1;31m [INFO] Downloading Manifest \e[0m"
Manifest="https://api.samsam123.name.my/mewatch/output.php?secret="$AUTH
wget -O mewatchsg_drm_wv_url.m3u8 --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36 Edg/94.0.992.31" $Manifest

echo -e "\e[1;31m [INFO] Generating Date & Time file in UTC+08 \e[0m"
echo "`env TZ=UTC-08 date`" > "Date & Time UTC +08.txt"

echo -e "\e[1;31m [INFO] Done \e[0m"
