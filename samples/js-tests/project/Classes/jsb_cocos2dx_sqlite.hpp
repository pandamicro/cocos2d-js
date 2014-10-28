#ifndef __jsb_cocos2dx_sqlLite_h__
#define __jsb_cocos2dx_sqlLite_h__

#include "jsapi.h"
#include "jsfriendapi.h"


extern JSClass  *jsb_SQLiteStatement_class;
extern JSObject *jsb_SQLiteStatement_prototype;

bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_jsb_cocos2dx_sqlLite_SQLiteStatement_finalize(JSContext *cx, JSObject *obj);
void js_register_jsb_cocos2dx_sqlLite_SQLiteStatement(JSContext *cx, JSObject *global);
void register_all_jsb_cocos2dx_sqlLite(JSContext* cx, JSObject* obj);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_reset(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_execute(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_dataType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_bind(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_nextRow(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_restartSelect(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_bindNull(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_valueInt(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_valueString(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteStatement_SQLiteStatement(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_SQLiteWrapper_class;
extern JSObject *jsb_SQLiteWrapper_prototype;

bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_jsb_cocos2dx_sqlLite_SQLiteWrapper_finalize(JSContext *cx, JSObject *obj);
void js_register_jsb_cocos2dx_sqlLite_SQLiteWrapper(JSContext *cx, JSObject *global);
void register_all_jsb_cocos2dx_sqlLite(JSContext* cx, JSObject* obj);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_begin(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_rollback(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_directStatement(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_statement(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_copyToWritablePath(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_commit(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_lastError(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_open(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_close(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsb_cocos2dx_sqlLite_SQLiteWrapper_SQLiteWrapper(JSContext *cx, uint32_t argc, jsval *vp);
#endif

