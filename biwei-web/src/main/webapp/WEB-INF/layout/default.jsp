<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator"%>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/page" prefix="page"%>

<html>
    <head>
        <title><decorator:title/> | 心灵驿站</title>
        <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap-theme.css">
        <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.css">
        <script type="text/javascript" src="http://cdn.bootcss.com/jquery/1.11.1/jquery.js"></script>
        <script type="text/javascript" src="http://cdn.bootcss.com/bootstrap/3.3.2/js/bootstrap.js"></script>
        <script type="text/javascript" src="http://cdn.bootcss.com/seajs/2.2.1/sea.js"></script>
        <script type="text/javascript">
            seajs.config({
                'base': 'http://cdn.bootcss.com/',
                'paths': {
                    'local': 'local'
                },
                'map': [
                    ['http://cdn.bootcss.com/local/', 'http://localhost:8080/myweb/']
                ],
                'alias': {
                    'jquery': 'jquery/1.11.1/jquery.js',
                    'datepicker-css': 'local/assets/lib/datepicker/css/datepicker.min.css',
                    'datepicker-js': 'local/assets/lib/datepicker/js/datepicker.min.js',
                    'datepicker': 'local/assets/component/datepicker/datepicker.js',
                    'moment': 'local/assets/lib/moment/moment.js'
                }
            });
        </script>
        <decorator:head/>
    </head>
    <body
        <decorator:getProperty property="body.id" writeEntireProperty="true"/>
        <decorator:getProperty property="body.class" writeEntireProperty="true"/>>
        <decorator:body/>
    </body>
    <footer>
    </footer>
</html>

