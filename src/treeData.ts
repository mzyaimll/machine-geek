export default {
    "success": true,
    "code": 200,
    "data": [
        {
            "id": "2",
            "name": "数据中心",
            "key": "DATACENTER",
            "sort": 100,
            "description": "数据中心",
            "type": 0,
            "path": "/DataCenter",
            "children": []
        },
        {
            "id": "1",
            "name": "系统设置",
            "key": "SYSTEM",
            "sort": 0,
            "description": "系统设置",
            "type": 0,
            "path": "/Setting",
            "children": []
        },
        {
            "id": "3",
            "name": "开发者工具",
            "key": "DEVELOP",
            "sort": 0,
            "description": "开发者工具",
            "type": 0,
            "path": "/DevTools",
            "children": [
                {
                    "id": "5",
                    "name": "代码生成器",
                    "key": "DEVELOP:GENERATOR",
                    "sort": 0,
                    "description": "代码生成器",
                    "type": 0,
                    "path": "/DevTools/CodeGenerator",
                    "children": []
                },
                {
                    "id": "6",
                    "name": "数据库信息",
                    "key": "DEVELOP:DATABASE",
                    "sort": 0,
                    "description": "数据库信息",
                    "type": 0,
                    "path": "/DevTools/DataInfo",
                    "children": []
                },
                {
                    "id": "7",
                    "name": "异常信息",
                    "key": "DEVELOP:EXCEPTION",
                    "sort": 0,
                    "description": "异常信息",
                    "type": 0,
                    "path": "/DevTools/ExceptionInfo",
                    "children": [
                        {
                            "id": "8",
                            "name": "删除异常信息",
                            "key": "DEVELOP:EXCEPTION:DELETE",
                            "sort": 0,
                            "description": "删除异常信息",
                            "type": 1,
                            "path": null,
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "4",
            "name": "系统管理",
            "key": "MANAGEMENT",
            "sort": 0,
            "description": "系统管理",
            "type": 0,
            "path": "/Management",
            "children": [
                {
                    "id": "9",
                    "name": "用户管理",
                    "key": "MANAGEMENT:SYSTEMUSER",
                    "sort": 0,
                    "description": "用户管理",
                    "type": 0,
                    "path": "/Management/SystemUser",
                    "children": []
                },
                {
                    "id": "10",
                    "name": "角色管理",
                    "key": "MANAGEMENT:SYSTEMROLE",
                    "sort": 0,
                    "description": "角色管理",
                    "type": 0,
                    "path": "/Management/SystemRole",
                    "children": []
                },
                {
                    "id": "11",
                    "name": "权限管理",
                    "key": "MANAGEMENT:SYSTEMAUTHORITY",
                    "sort": 0,
                    "description": "权限管理",
                    "type": 0,
                    "path": "/Management/SystemAuthority",
                    "children": []
                }
            ]
        }
    ]
}