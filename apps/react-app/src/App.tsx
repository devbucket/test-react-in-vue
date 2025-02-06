import { useEffect, useState } from 'react'

import {
  AreaChartCard,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ExternalLinkIcon,
  Layout,
  MonitorSmartphoneIcon,
  PageContainer,
  SideDrawer,
  SideDrawerContent,
  SideDrawerTrigger,
  StarIcon,
  Text,
} from '@csq/library/react'

import { chartData as chartDataRaw } from '@/data/chart.data'

type ChartData = {
  date: string
  desktop: number
  mobile: number
}

function App() {
  const [chartData, setChartData] = useState<ChartData[]>([])

  useEffect(() => {
    setTimeout(() => {
      setChartData(chartDataRaw)
    }, 1000)
  }, [])

  const handleClose = () => {
    console.log('Card closed!')
  }

  return (
    <Layout>
      <PageContainer>
        <Text variant="header1" content="Welcome to the React App" />

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between">
            <Text variant="header4" as="h2" content="Your recently viewed" />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Text content="50 days ago" />
                <CardTitle className="font-bold text-xl">Speed Analysis Lab</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <SideDrawer>
                  <SideDrawerTrigger>
                    <Button variant="ghost" className="text-indigo-500 hover:text-indigo-500">
                      <ExternalLinkIcon className="size-4" />
                      <span>Open Speed Analysis Lab</span>
                    </Button>
                  </SideDrawerTrigger>
                  <SideDrawerContent title="Speed Analysis Lab" description="Some description">
                    <p>Testing some Content</p>
                  </SideDrawerContent>
                </SideDrawer>
                <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
                  <StarIcon />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Text content="79 days ago" />
                <CardTitle className="font-bold text-xl">Speed Analysis Lab</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-indigo-500 hover:text-indigo-500">
                  <ExternalLinkIcon className="size-4" />
                  <span>Open Speed Analysis Lab</span>
                </Button>
                <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
                  <StarIcon />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Text content="83 days ago" />
                <CardTitle className="font-bold text-xl">Journey Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline">
                  <MonitorSmartphoneIcon className="size-4" />
                </Button>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="ghost"
                  className="text-indigo-500 hover:text-indigo-500"
                  onClick={handleClose}
                >
                  <ExternalLinkIcon className="size-4" />
                  <span>Open Journey Analysis</span>
                </Button>
                <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
                  <StarIcon />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Text content="84 days ago" />
                <CardTitle className="font-bold text-xl">Journey Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline">
                  <MonitorSmartphoneIcon className="size-4" />
                </Button>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-indigo-500 hover:text-indigo-500">
                  <ExternalLinkIcon className="size-4" />
                  <span>Open Journey Analysis</span>
                </Button>
                <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
                  <StarIcon />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <AreaChartCard chartData={chartData} />
        </div>
      </PageContainer>
    </Layout>
  )
}

export default App
