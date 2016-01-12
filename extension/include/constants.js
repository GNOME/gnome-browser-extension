/*
    Gnome-shell integration for Chrome
    Copyright (C) 2016  Yuri Konotopov <ykonotopov@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 */

GS_CHROME_ID				= "gphhapmejobijbbhgpjhcjognlahblep";

NOTIFICATION_UPDATE_AVAILABLE		= 'gs-chrome-update';
NOTIFICATION_UPDATE_CHECK_FAILED	= 'gs-chrome-update-fail';
ALARM_UPDATE_CHECK			= 'gs-chrome-update-check';

MESSAGE_NEXT_UPDATE_CHANGED		= 'gs-next-update-changed';

NATIVE_HOST				= 'io.github.ne0sight.gs_chrome_connector';

DEFAULT_OPTIONS				= {
	updateCheck:		true,
	updateCheckPeriod:	6
};