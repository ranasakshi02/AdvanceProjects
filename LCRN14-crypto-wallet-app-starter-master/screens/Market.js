import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Animated
} from 'react-native';
import { MainLayout } from "./";
import { connect } from 'react-redux';
import { getCoinMarket } from '../store/market/marketActions'
import { SIZES, FONTS, icons, dummyData, COLORS, constants } from '../constants';
import { HeaderBar, TextButton } from '../components';
import { LineChart } from 'react-native-chart-kit';
import { useFocusEffect } from "@react-navigation/native";

const marketTabs = constants.marketTabs.map((marketTab) => ({
    ...marketTab,
    ref: React.createRef()
}))


const TabIndicator = ({ measureLayout, scrollX }) => {
    const inputRange = marketTabs.map((_, i) => i * SIZES.width)
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.x)
    })
    return (
        <Animated.View
            style={{
                position: 'absolute',
                left: 0,
                height: '100%',
                width: (SIZES.width - (SIZES.radius * 2)) / 2,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray,
                transform: [{
                    translateX
                }]

            }}
        />
    )

}

const Tabs = ({ scrollX, onMarketTabPress }) => {

    const [measureLayout, setMeeasureLayout] = React.useState([]);
    const containerRef = React.useRef();

    React.useEffect(() => {
        let ml = []

        marketTabs.forEach(marketTab => {
            marketTab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height
                    })
                    if (ml.length === marketTabs.length) {
                        setMeeasureLayout(ml)
                    }
                }
            )
        })

    }, [containerRef.current])
    return (
        <View
            ref={containerRef}
            style={{
                flexDirection: 'row'
            }}>
            {/* Tab Indicator  */}
            {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />}

            {/* Tabs  */}
            {
                marketTabs.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={`marketTab-${index}`}
                            style={{
                                flex: 1,
                            }}
                            onPress={() => onMarketTabPress(index)}
                        >
                            <View
                                ref={item.ref}
                                style={{
                                    paddingHorizontal: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 40
                                }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const Market = ({ getCoinMarket, coins }) => {

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const marketTabScrollViewRef = React.useRef()

    const onMarketTabPress = React.useCallback(marketTabIndex => {
        marketTabScrollViewRef?.current?.scrollToOffset({
            offset: marketTabIndex * SIZES.width
        })
    })

    React.useEffect(() => {
        getCoinMarket()
    }, [])

    function rederTabBar() {
        return (
            <View style={{
                marginTop: SIZES.radius,
                marginHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray
            }}>
                <Tabs
                    scrollX={scrollX}
                    onMarketTabPress={onMarketTabPress}
                />
            </View>
        )
    }

    function renderButtons() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                marginHorizontal: SIZES.radius
            }}>
                <TextButton
                    label={"USD"}
                    containerStyle={{
                        marginLeft: 10
                    }}
                />
                <TextButton
                    label={"% (7d)"}
                    containerStyle={{
                        marginLeft: SIZES.base
                    }}
                />
                <TextButton
                    label={"Top"}
                    containerStyle={{
                        marginLeft: SIZES.base
                    }}
                />
            </View>
        )
    }

    function renderList() {
        return (
            <Animated.FlatList
                ref={marketTabScrollViewRef}
                data={marketTabs}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                onScroll={
                    Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } }
                    ], {
                        useNativeDriver: false
                    })
                }
                renderItem={({ item }) => {
                    let priceColor = (item.price_change_percentage_7d_in_currency == 0) ?
                        COLORS.lightGray3 : (item.price_change_percentage_7d_in_currency > 0)
                            ? COLORS.lightGreen : COLORS.red
                    return (
                        <View style={{
                            flex: 1,
                            width: SIZES.width
                        }}>
                            <FlatList
                                data={coins}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingHorizontal: SIZES.padding,
                                            marginBottom: SIZES.radius
                                        }}>
                                            {/* Coin Section  */}
                                            <View style={{
                                                flex: 1.5,
                                                flexDirection: 'row',
                                                alignItems: 'center',

                                            }}>
                                                <Image
                                                    source={{ uri: item.image }}
                                                    style={{
                                                        height: 20,
                                                        width: 20
                                                    }}
                                                />
                                                <Text style={{
                                                    marginLeft: SIZES.radius,
                                                    color: COLORS.white,
                                                    ...FONTS.h3
                                                }}>
                                                    {item.name}
                                                </Text>
                                            </View>

                                            {/* LineChart Section  */}
                                            <View style={{
                                                flex: 1,
                                                alignItems: 'center'
                                            }}>
                                                <LineChart
                                                    withVerticalLabels={false}
                                                    withHorizontalLabels={false}
                                                    withDots={false}
                                                    withInnerLines={false}
                                                    withVerticalLines={false}
                                                    withOuterLines={false}
                                                    withShadow={false}
                                                    data={{
                                                        datasets: [
                                                            {
                                                                data: item.sparkline_in_7d.price
                                                            }
                                                        ]
                                                    }}
                                                    width={100}
                                                    height={60}
                                                    chartConfig={{
                                                        color: () => priceColor
                                                    }}
                                                    bezier
                                                    style={{
                                                        paddingRight: 0
                                                    }}
                                                />
                                            </View>

                                            {/* Figures */}
                                            <View style={{
                                                flex: 1,
                                                alignItems: 'flex-end',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    color: COLORS.white,
                                                    ...FONTS.h4
                                                }}>
                                                    $ {item.current_price}
                                                </Text>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center'
                                                }}>
                                                    {
                                                        item.price_change_percentage_7d_in_currency != 0 &&
                                                        <Image
                                                            source={icons.upArrow}
                                                            style={{
                                                                height: 10,
                                                                width: 10,
                                                                tintColor: priceColor,
                                                                transform: item.price_change_percentage_7d_in_currency > 0 ? [{ rotate: '45deg' }] : [{ rotate: '125deg' }]
                                                            }}
                                                        />
                                                    }
                                                    <Text style={{
                                                        marginLeft: 5,
                                                        color: priceColor,
                                                        ...FONTS.body5,
                                                        lineHeight: 15
                                                    }}>
                                                        {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                                                    </Text>

                                                </View>
                                            </View>


                                        </View>
                                    )
                                }}
                            />
                        </View>
                    )
                }}
            />
        )
    }

    return (
        <MainLayout>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black,
                marginTop: -30
            }}>
                {/* Header  */}
                <HeaderBar title={"Market"} />

                {/*  TabBar */}
                {rederTabBar()}

                {/* Buttons  */}
                {renderButtons()}

                {/* MarketList */}
                {renderList()}
            </View>
        </MainLayout>
    )
}

// export default Market;
function mapStateToProps(state) {
    return {
        coins: state.marketReducer.coins
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCoinMarket: (currency, coinList, orderBy, sparkline, priceChangePerc,
            perPage, page) => {
            return dispatch(getCoinMarket(currency, coinList, orderBy, sparkline,
                priceChangePerc, perPage, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);